package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "user_details")
public class UserData {
    @Id
    private String email;
    private String name;
    private String password;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<CarBros> favoriteCars = new ArrayList<>();

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UserData(String email, String name, String password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }

    public UserData() {
    }

    public List<CarBros> getFavoriteCars() {
        return favoriteCars;
    }

    public void setFavoriteCars(List<CarBros> favoriteCars) {
        this.favoriteCars = favoriteCars;
    }

    public void addToFavorites(CarBros car) {
        favoriteCars.add(car);
        car.setUser(this);
    }

    @Override
    public String toString() {
        return "UserData [email=" + email + ", name=" + name + ", password=" + password + "]";
    }
}
