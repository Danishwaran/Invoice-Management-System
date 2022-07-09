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

@WebServlet("/SearchInvoice")
public class SearchInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println(request.getMethod());
		System.out.println("Search request success");
		System.out.println(request.getInputStream());
		
		String json = new BufferedReader(new InputStreamReader(request.getInputStream())).lines().collect(joining("\n"));
		System.out.println(json);
		
		Gson gsonbuilder = new GsonBuilder().create();
		
		Invoice invoice = gsonbuilder.fromJson(json, Invoice.class);
		System.out.println(invoice.getCust_number());
		
		InvoiceDAO invoiceDAO = new InvoiceDAO();
		
		String query = "cust_number like '"+invoice.getCust_number()+ "%' and is_deleted = 0 limit 200 offset 0";
		System.out.println(query);
		
		ArrayList<Invoice> allInvoice = invoiceDAO.InvoiceList(query);
		
		Gson gson = new Gson();
		
		String result = gson.toJson(allInvoice);
		
		response.setStatus(200);
		response.setHeader("Content-Type", "application/json");
		response.getOutputStream().println(result);
		
	}

}
