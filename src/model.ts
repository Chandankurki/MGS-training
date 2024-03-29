export class Product {
    public ProductID: number=0;
    public ProductName = '';
    public Discontinued? = false;
    public UnitsInStock?: number;
    public UnitPrice = 0;
    public Category = {
        CategoryID: 0,
        CategoryName: ''
    };
}

export class Order {
    public OrderID: number=0;
    public CustomerID: string='';
    public EmployeeID: number=0;
    public OrderDate: Date=new Date();
    public RequiredDate: Date=new Date();
    public ShippedDate: Date=new Date();
    public ShipVia: number=0;
    public Freight: number=0;
    public ShipName: string='';
    public ShipAddress: string='';
    public ShipCity: string='';
    public ShipRegion: string='';
    public ShipPostalCode: string='';
    public ShipCountry: string='';
}

export class Customer {
    public Id = '';
    public CompanyName = '';
    public ContactName = '';
    public ContactTitle = '';
    public Address?: string = '';
    public City = '';
    public PostalCode? = '';
    public Country? = '';
    public Phone? = '';
    public Fax? = '';
}

export class Category {
    public CategoryID?: number;
    public CategoryName?: string;
    public Description?: string;
}
