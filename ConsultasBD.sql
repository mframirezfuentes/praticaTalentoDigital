A-select productCode,productLine,productName,quantityInStock 
from products
where productLine='Motorcycles'
order by quantityInStock desc;

b-select productCode,productLine,productName,quantityInStock 
from products
where productName like '%Ford%'
order by productLine, productName asc

c-select productLine,count(quantityInStock) as cantidad
from products
group by productLine
order by cantidad desc

d-select o.orderNumber,o.OrderDate,od.quantityOrdered, od.priceEach
from orders as o
inner join orderDetails as od on o.orderNumber=od.orderNumber
where o.status ='In Process' and od.productCode='S18_1749'

e-select p.productLine, sum(od.quantityOrdered)
from products as p
inner join orderDetails as od on p.productCode=od.productCode
inner join orders as o on od.orderNumber=o.orderNumber
where extract(year from o.orderDate) =2004
group by p.productLine
order by sum(od.quantityOrdered) desc