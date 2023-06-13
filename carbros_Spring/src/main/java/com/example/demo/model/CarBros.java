package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "carbrosdata")
public class CarBros {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int vehicleid;
    private String manufacturer;
    private String model;
    private String launch_date;
    private String price;
    private String mileage;
    @ManyToOne
    @JoinColumn(name = "user_email")
    private UserData user;
    @OneToMany(mappedBy = "car")
    private List<Review> reviews = new ArrayList<>();

    public int getVehicleid() {
        return vehicleid;
    }

    public void setVehicleid(int vehicleid) {
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

    public String getLaunch_date() {
        return launch_date;
    }

    public void setLaunch_date(String launch_date) {
        this.launch_date = launch_date;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getMileage() {
        return mileage;
    }

    public void setMileage(String mileage) {
        this.mileage = mileage;
    }

    public CarBros(int vehicleid, String manufacturer, String model, String launch_date, String price, String mileage) {
        super();
        this.vehicleid = vehicleid;
        this.manufacturer = manufacturer;
        this.model = model;
        this.launch_date = launch_date;
        this.price = price;
        this.mileage = mileage;
    }

    public CarBros() {
        super();
    }

    @Override
    public String toString() {
        return "CarBros [vehicleid=" + vehicleid + ", manufacturer=" + manufacturer + ", model=" + model
                + ", launch_date=" + launch_date + ", price=" + price + ", mileage=" + mileage + "]";
    }

    public UserData getUser() {
        return user;
    }

    public void setUser(UserData user) {
        this.user = user;
    }

    public CarBros(int vehicleid, String manufacturer, String model, String launch_date, String price, String mileage,
            UserData user) {
        super();
        this.vehicleid = vehicleid;
        this.manufacturer = manufacturer;
        this.model = model;
        this.launch_date = launch_date;
        this.price = price;
        this.mileage = mileage;
        this.user = user;
    }
    public List<Review> getReviews() {
        return reviews;
    }
    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }
    public void addReview(Review review) {
        reviews.add(review);
        review.setCar(this);
    }

	public CarBros(int vehicleid, String manufacturer, String model, String launch_date, String price, String mileage,
			UserData user, List<Review> reviews) {
		super();
		this.vehicleid = vehicleid;
		this.manufacturer = manufacturer;
		this.model = model;
		this.launch_date = launch_date;
		this.price = price;
		this.mileage = mileage;
		this.user = user;
		this.reviews = reviews;
	}

}
