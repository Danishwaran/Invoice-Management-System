package com.HighRadius.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.HighRadius.pojo.Invoice;

//sl_no,business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,
//document_create_date,due_in_date,invoice_currency,document_type,posting_id,
//total_open_amount,baseline_create_date,cust_payment_terms,invoice_id

//sl_no, document_create_date1, area_business, isOpen,aging_bucket

public class InvoiceDAO {
	
	private String DB_URL = "jdbc:mysql://localhost:3306/grey_goose";
	private String user = "root";
	private String password = "zatchbell";
	
	private static final String INSERT_INVOICE = "INSERT INTO winter_internship"
			+ "(business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,"
			+ "due_in_date,invoice_currency,document_type,posting_id,total_open_amount,"
			+ "baseline_create_date,cust_payment_terms,invoice_id) VALUES" 
			+ " (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
	
	
	private static final String SELECT_INVOICES = "SELECT sl_no,business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,"
			+ "document_create_date,due_in_date,invoice_currency,document_type,posting_id,"
			+ "total_open_amount,baseline_create_date,cust_payment_terms,invoice_id from winter_internship where ";
	
	
	private static final String EDIT_INVOICE = "UPDATE winter_internship set invoice_currency = ?, cust_payment_terms = ? where sl_no = ?;";
	
	
	private static final String DELETE_INVOICE = "UPDATE winter_internship set is_deleted = 1 where sl_no in";
	
	
	public InvoiceDAO() {
		super();
	}

	protected Connection getConnection() {
		Connection connection = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			connection = DriverManager.getConnection(DB_URL, user, password);
		} 
		catch (SQLException e) {
			e.printStackTrace();
		} 
		catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		
		return connection;
	}
	
	
	public ArrayList<Invoice> InvoiceList(String query) {
		
		ArrayList<Invoice> allInvoice = new ArrayList<Invoice>();
		
		int sl_no;
		String business_code;
		long cust_number;
		String clear_date;
		int buisness_year;
		String doc_id;
		String posting_date;
		String document_create_date;
		String due_in_date;
		String invoice_currency;
		String document_type;
		long posting_id;
		float total_open_amount;
		String baseline_create_date;
		String cust_payment_terms;
		long invoice_id;
		
		
		try(Connection connection = getConnection();
				PreparedStatement statement = connection.prepareStatement(SELECT_INVOICES+query);) { 
			
			System.out.println(statement.toString());
			
			ResultSet rs = statement.executeQuery();
			
			while(rs.next())
			{
					
				sl_no = rs.getInt("sl_no");
				business_code = rs.getString("business_code");
				cust_number = rs.getLong("cust_number");
				clear_date = rs.getString("clear_date");
				buisness_year = rs.getInt("buisness_year");
				doc_id = rs.getString("doc_id");
				posting_date = rs.getString("posting_date");
				document_create_date = rs.getString("document_create_date");
				due_in_date = rs.getString("due_in_date");
				invoice_currency = rs.getString("invoice_currency");
				document_type = rs.getString("document_type");
				posting_id = rs.getLong("posting_id");
				total_open_amount = rs.getFloat("total_open_amount");
				baseline_create_date = rs.getString("baseline_create_date");
				cust_payment_terms = rs.getString("cust_payment_terms");
				invoice_id = rs.getLong("invoice_id");
				
				Invoice invoice = new Invoice(sl_no,business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,
						document_create_date,due_in_date,invoice_currency,document_type,posting_id,
						total_open_amount,baseline_create_date,cust_payment_terms,invoice_id);
						
				allInvoice.add(invoice);	
			}
			  
		}
		catch (Exception e)
		{
			e.printStackTrace();
			System.out.println("exception occur");
		}
			
		return allInvoice;		
	}
	

	public void AddInvoice(Invoice invoice)
	{
		
		try(Connection connection = getConnection();
				PreparedStatement  preparedStatement = connection.prepareStatement(INSERT_INVOICE)) {
			

			preparedStatement.setString(1, invoice.getBusiness_code());
			preparedStatement.setLong(2, invoice.getCust_number());
			preparedStatement.setString(3, invoice.getClear_date());
			preparedStatement.setInt(4, invoice.getBuisness_year());
			preparedStatement.setString(5, invoice.getDoc_id());
			preparedStatement.setString(6, invoice.getPosting_date());
			preparedStatement.setString(7, invoice.getDocument_create_date());
			preparedStatement.setString(8, invoice.getDue_in_date());
			preparedStatement.setString(9, invoice.getInvoice_currency());
			preparedStatement.setString(10, invoice.getDocument_type());
			preparedStatement.setLong(11, invoice.getPosting_id());
			preparedStatement.setFloat(12, invoice.getTotal_open_amount());
			preparedStatement.setString(13, invoice.getBaseline_create_date());
			preparedStatement.setString(14, invoice.getCust_payment_terms());
			preparedStatement.setLong(15, invoice.getInvoice_id());
			
			
			System.out.println(preparedStatement);
			
			preparedStatement.executeUpdate();
			
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	public void EditInvoice(Invoice invoice){
		
		try(Connection connection = getConnection();
				PreparedStatement  preparedStatement = connection.prepareStatement(EDIT_INVOICE)) {
			
			preparedStatement.setString(1, invoice.getInvoice_currency());
			preparedStatement.setString(2, invoice.getCust_payment_terms());
			preparedStatement.setInt(3, invoice.getSl_no());
			
			System.out.println(preparedStatement);
			
			preparedStatement.executeUpdate();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public void DeleteInvoice(String sl_nos){
		
		try(Connection connection = getConnection();
				PreparedStatement  preparedStatement = connection.prepareStatement(DELETE_INVOICE+sl_nos)) {
			
			System.out.println(preparedStatement);
			
			preparedStatement.executeUpdate();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
