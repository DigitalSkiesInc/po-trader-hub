import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Dashboard from "@/components/Dashboard";
import Premium from "@/components/Premium";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";

const Index = () => {

  const [user, setUser] = useState(null);
  const location = useLocation();


  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    if (token) {
        axios.post("http://localhost:3000/user-details", { token }, { withCredentials: true })
        .then((response) => {
          const { name, number, email } = response.data;

          localStorage.setItem("user", JSON.stringify({ name, number, email }));

          console.log("User details saved:", { name, number, email });
        })
        .catch(err => console.error("Error verifying token", err));
    }
  }, [location]);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Dashboard />
        <Premium />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
