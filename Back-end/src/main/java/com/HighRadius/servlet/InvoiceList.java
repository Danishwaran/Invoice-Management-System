package com.HighRadius.servlet;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.HighRadius.dao.InvoiceDAO;
import com.HighRadius.pojo.Invoice;
import com.google.gson.Gson;


@WebServlet("/InvoiceList")
public class InvoiceList extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		System.out.print(request.getMethod());
		System.out.print("fetch request success");
		
		InvoiceDAO invoiceDAO = new InvoiceDAO();
		
		ArrayList<Invoice> allInvoice = invoiceDAO.InvoiceList("is_deleted = 0 limit 200 offset 0");
		
		Gson gson = new Gson();
		
		String result = gson.toJson(allInvoice);
		
		response.setStatus(200);
		response.setHeader("Content-Type", "application/json");
		response.getOutputStream().println(result);
	}

}
