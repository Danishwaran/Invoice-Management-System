package com.HighRadius.servlet;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.HighRadius.dao.InvoiceDAO;
import com.HighRadius.pojo.Invoice;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import static java.util.stream.Collectors.joining;


@WebServlet("/AddInvoice")
public class AddInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest request,HttpServletResponse response) throws IOException,ServletException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		System.out.println(request.getMethod());
		System.out.println("fetch request success");
		
		String json = "";
		try
		{
			json = new BufferedReader(new InputStreamReader(request.getInputStream())).lines().collect(joining("\n"));
		}
		catch (Exception e)
		{
			response.setStatus(500);
		}
		
		
		System.out.println(json);
		
		Gson gsonbuilder = new GsonBuilder().create();
		
		Invoice invoice = gsonbuilder.fromJson(json, Invoice.class);
		System.out.println(invoice.toString());
		
		InvoiceDAO invoiceDAO = new InvoiceDAO();
		
		invoiceDAO.AddInvoice(invoice);
		
		response.setStatus(200);
	}

}
