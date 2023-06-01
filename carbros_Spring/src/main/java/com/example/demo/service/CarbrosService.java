package com.example.demo.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.CarBros;
import com.example.demo.repository.CarbrosRepo;


@Service
public class CarbrosService {
    @Autowired
    CarbrosRepo carbrosRepo;

    public CarBros create(CarBros vehicle){
        return carbrosRepo.save(vehicle);
    }

    public Optional<CarBros> read(Long id){
        return carbrosRepo.findById(id);
    }
    
    public CarBros update(CarBros CarBros)
    {
    	return carbrosRepo.save(CarBros);
    }
    public void delete(long id)
    {
    	carbrosRepo.deleteById( id);
    }
    public void deleteall()
    {
    	carbrosRepo.deleteAll();
    }
    public List<CarBros> readall(){
       List<CarBros> allCarBros=carbrosRepo.findAll();
       return allCarBros;
    }
    public List<CarBros> getbymodel(String model)
    {
    	return carbrosRepo.findbyModel(model);
    }
}
