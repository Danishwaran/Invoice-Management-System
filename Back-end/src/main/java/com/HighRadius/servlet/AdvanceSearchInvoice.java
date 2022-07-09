package com.HighRadius.servlet;

import static java.util.stream.Collectors.joining;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.HighRadius.dao.InvoiceDAO;
import com.HighRadius.pojo.Invoice;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;


@WebServlet("/AdvanceSearchInvoice")
public class AdvanceSearchInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		System.out.println(request.getMethod());
		System.out.println("Advance Search request success");
		
		String json = new BufferedReader(new InputStreamReader(request.getInputStream())).lines().collect(joining("\n"));
		System.out.println(json);
		
		Gson gsonbuilder = new GsonBuilder().create();
		
		Invoice invoice = gsonbuilder.fromJson(json, Invoice.class);
		
		InvoiceDAO invoiceDAO = new InvoiceDAO();
		
		String query = "";
		
		ArrayList<Invoice> allInvoice;
		
		
		if(invoice.getDoc_id() != null)
		{
			query += ("doc_id = " + invoice.getDoc_id() + " or ");
		}
		if(invoice.getInvoice_id() != 0)
		{
			query += ("invoice_id = " + invoice.getInvoice_id() + " or ");
		}
		if(invoice.getCust_number() != 0)
		{
			query += ("cust_number = " + invoice.getCust_number() + " or ");
		}
		if(invoice.getBuisness_year() != 0)
		{
			query += ("buisness_year = " + invoice.getBuisness_year() + " or ");
		}
			
		System.out.println("query:"+query);
		
		if(query == "")
		{
			allInvoice = invoiceDAO.InvoiceList("is_deleted = 0 limit 200 offset 0");
		}
		else
		{
			allInvoice = invoiceDAO.InvoiceList(query.substring(0, query.length()-3)+"and is_deleted = 0 limit 200 offset 0");
		}
				
	
		Gson gson = new Gson();
		
		String result = gson.toJson(allInvoice);
		
		response.setStatus(200);
		response.setHeader("Content-Type", "application/json");
		response.getOutputStream().println(result);
		
	}

}
