package com.mindgate.main;

import java.util.Scanner;

import com.mindgate.collection.EmployeeCollection;
import com.mindgate.pojo.Employee;

public class EmployeeCollectionMain {

	public static void main(String[] args) {
		EmployeeCollection emp = new EmployeeCollection();
		int id;
		String name;
		double salary;
		Scanner sc = new Scanner(System.in);
		int choice;
		Employee emp1;
		do {
			System.out.println();
			menu();
			choice = sc.nextInt();
			switch (choice) {
			case 1:
				System.out.println("Enter number of employee details to be added");
				int n = sc.nextInt();
				for(int i = 1;i<=n;i++) {
					System.out.println("Enter Employee Id");
					id = sc.nextInt();
					System.out.println("Enter Employee Name");
					name = sc.next();
					System.out.println("Enter Employee Salary");
					salary = sc.nextDouble();
					emp1 = new Employee(id, name, salary);
					if(emp.addEmployee(emp1) == true) {
						System.out.println("employee details added");
					}
					else
						System.out.println("employee already exist");
				}
				for (Employee Empp : emp.getAllEmp()) {
					System.out.println(Empp);
				}
				break;
			case 2 : 
				System.out.println("Enter Employee Id whose details to be deleted");
				id =sc.nextInt();
				if(emp.delEmployee(id) == true)
					System.out.println("Employee details deleted successfully");
				else
					System.out.println("Employee does'nt exist");
				break;
			case 3 :
				System.out.println("Enter employee id to be updated");
				System.out.println("Press 1 to update name");
				System.out.println("Press 2 to update salary");
				int ch1 = sc.nextInt();
				switch (ch1) {
				case 1:
					System.out.println("Enter Employee Id");
					id = sc.nextInt();
					System.out.println("Enter Employee New Name to be updated ");
					name = sc.next();
					emp.updateName(id, name);
					for (Employee emp11 : emp.getAllEmp()) {
						if(emp11.getEmployeeid()==id)
							System.out.println(emp11);
					}
					break;
				case 2 : 
					System.out.println("Enter Employee Id");
					id = sc.nextInt();
					System.out.println("Enter Employee New Salary to be updated ");
					salary = sc.nextDouble();
					emp.updateSalary(id, salary);
					for (Employee emp11 : emp.getAllEmp()) {
						if(emp11.getEmployeeid()==id)
							System.out.println(emp11);
					}
					break;
				default:
					System.out.println("invalid Selection");
					break;
				}
				break;
			case 4 : 
				System.out.println("Enter employee id to be find");
				id = sc.nextInt();
				System.out.println(emp.getEmployee(id));
				break;
			case 5 :
				System.out.println("Press y to display all employee details");
				char ch = sc.next().charAt(0);
				if(ch == 'y' || ch == 'Y') {
					for (Employee emp2 : emp.getAllEmp()) {
						System.out.println(emp2);
					}
				}
				break;
//nk,l,m,m  ,ll,,l llaaaacccccc , ,v, mllmsyso  chandan ks arun suman rajesh 
//				nnimmkkskk jnnsjsoo kksvv  kkksl kssk 
			default:
				break;
			}
		} while (choice != 9);
		sc.close();
	}

	public static void menu() {
		System.out.println("Enter of choice of operation");
		System.out.println("press 1 for add employee details");
		System.out.println("press 2 for delete employee details");
		System.out.println("press 3 for update employee details");
		System.out.println("press 4 for find employee details");
		System.out.println("press 5 for find all employee details");
		System.out.println("press 9 for exit");
		System.out.println();
	}
}