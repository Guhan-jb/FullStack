package com.example.demo.model;
import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="carbrosdata")
public class CarBros {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
@Column(name = "vehicle_id")
private Long vehicleid;
private String manufacturer;
private String model;
private Date launchdate;
private float price,milage;
private int noOfColors;
public CarBros(Long vehicleid, String manufacturer, String model, Date launchdate, float price, float milage,
		int noOfColors) {
	super();
	this.vehicleid = vehicleid;
	this.manufacturer = manufacturer;
	this.model = model;
	this.launchdate = launchdate;
	this.price = price;
	this.milage = milage;
	this.noOfColors = noOfColors;
}
public CarBros()
{
	
}
public Long getVehicleid() {
	return vehicleid;
}
public void setVehicleid(Long vehicleid) {
	this.vehicleid = vehicleid;
}
public String getManufacturer() {
	return manufacturer;
}
public void setManufacturer(String manufacturer) {
	this.manufacturer = manufacturer;
}
public String getModel() {
	return model;
}
public void setModel(String model) {
	this.model = model;
}
public Date getLaunchdate() {
	return launchdate;
}
public void setLaunchdate(Date launchdate) {
	this.launchdate = launchdate;
}
public float getPrice() {
	return price;
}
public void setPrice(float price) {
	this.price = price;
}
public float getMilage() {
	return milage;
}
public void setMilage(float milage) {
	this.milage = milage;
}
public int getNoOfColors() {
	return noOfColors;
}
public void setNoOfColors(int noOfColors) {
	this.noOfColors = noOfColors;
}
@Override
public String toString() {
	return "CarBros [vehicleid=" + vehicleid + ", manufacturer=" + manufacturer + ", model=" + model + ", launchdate="
			+ launchdate + ", price=" + price + ", milage=" + milage + ", noOfColors=" + noOfColors + "]";
}

}
