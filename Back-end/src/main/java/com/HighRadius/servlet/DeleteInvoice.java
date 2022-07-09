package com.HighRadius.servlet;

import static java.util.stream.Collectors.joining;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.HighRadius.dao.InvoiceDAO;

@WebServlet("/DeleteInvoice")
public class DeleteInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		System.out.println(request.getMethod());
		System.out.println("delete request success");
		
		String sl_nos = "";
		try
		{
			sl_nos = new BufferedReader(new InputStreamReader(request.getInputStream())).lines().collect(joining("\n"));
		}
		catch (Exception e)
		{
			response.setStatus(500);
		}
		String newString = sl_nos.replace('[','(').replace(']',')');
		
		System.out.println(newString);
		
		InvoiceDAO invoiceDAO = new InvoiceDAO();
		
		invoiceDAO.DeleteInvoice(newString);
		
		response.setStatus(200);
	}


}
