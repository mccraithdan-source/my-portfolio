// src/projectData.js

// ✅ IMAGE IMPORTS – match exactly what’s in /src/assets
// ===== VHC =====
import vhc1 from "./assets/vhc1.jpg";
import vhc2 from "./assets/vhc2.jpg";
import vhc3 from "./assets/vhc3.jpg";
import vhc4 from "./assets/vhc4.jpg";
import vhc5 from "./assets/vhc5.jpg";
import vhc6 from "./assets/vhc6.jpg";
import vhc7 from "./assets/vhc7.jpg";

// ===== LMG =====
import lmg1 from "./assets/lmg1.jpg";
import lmg2 from "./assets/lmg2.jpg";
import lmg3 from "./assets/lmg3.jpg";
import lmg4 from "./assets/lmg4.jpg";
import lmg5 from "./assets/lmg5.jpg";
import lmg6 from "./assets/lmg6.jpg";
import lmg7 from "./assets/lmg7.jpg";

// ===== DOBINSONS =====
import dobinsons1 from "./assets/dobinsons1.jpg";
import dobinsons2 from "./assets/dobinsons2.jpg";
import dobinsons3 from "./assets/dobinsons3.jpg";
import dobinsons4 from "./assets/dobinsons4.jpg";
import dobinsons5 from "./assets/dobinsons5.jpg";
import dobinsons6 from "./assets/dobinsons6.jpg";
import dobinsons7 from "./assets/dobinsons7.jpg";

// ===== STILCON =====
import stilcon1 from "./assets/stilcon1.jpg";
import stilcon2 from "./assets/stilcon2.jpg";
import stilcon3 from "./assets/stilcon3.jpg";
import stilcon4 from "./assets/stilcon4.jpg";
import stilcon5 from "./assets/stilcon5.jpg";
import stilcon6 from "./assets/stilcon6.jpg";
import stilcon7 from "./assets/stilcon7.jpg";

// ===== CORINTHIAN =====
import corinthian1 from "./assets/corinthian1.jpg";
import corinthian2 from "./assets/corinthian2.jpg";
import corinthian3 from "./assets/corinthian3.jpg";
import corinthian4 from "./assets/corinthian4.jpg";
import corinthian5 from "./assets/corinthian5.jpg";
import corinthian6 from "./assets/corinthian6.jpg";
import corinthian7 from "./assets/corinthian7.jpg";

// ===== FYP =====
import fyp1 from "./assets/fyp1.jpg";
import fyp2 from "./assets/fyp2.jpg";
import fyp3 from "./assets/fyp3.jpg";
import fyp4 from "./assets/fyp4.jpg";
import fyp5 from "./assets/fyp5.png";
import fyp6 from "./assets/fyp6.jpg";
import fyp7 from "./assets/fyp7.jpg";


// ✅ PROJECT DATA
// PROJECT DATA
export const projects = [
  {
    id: "vhc",
    title: "VHC",
    images: [vhc1, vhc2, vhc3, vhc4, vhc5, vhc6, vhc7],
    description: "Vacuum Hose Carrier for adverse operations.",

    role: "Mechanical Design Engineer",
client: "Fast Automation (Cleanaway)",
year: "2024",
tools: ["SolidWorks", "Hydraulic design", "Project Management"],
details: [
  "The objective is to create a prototype vehicle that can be operated remotely, removing the physical burden of an operator, and to perform vacuum excavation duties in accordance with the client’s operation standards. The prototype will be used to evaluate suitability and required changes for a production version.",
  "I was the lead designer for this project, guiding it from early client engagement during the sales phase through to delivery of the final unit to a mine test site.",
  "I worked closely with the client to define requirements, develop the design, and align technical decisions with site needs and operational constraints.",
  "Throughout the project, I coordinated internal stakeholders, managed design iterations, and supported procurement and build decisions to ensure the solution met performance, safety, and timeline expectations. I remained client-facing throughout, providing regular updates, resolving technical queries, and ensuring the final unit was delivered and ready for real-world testing in an active mining environment."
],


  },

  {
    id: "lmgF",
    title: "Furnace Loader/Unloader",
    images: [lmg1, lmg2, lmg3, lmg4, lmg5, lmg6, lmg7],
    description: "Furnace loading and unloading cartesian robot",

    role: "Mechanical Design Engineer",
    client: "Fast Automation (confidential client)",
    year: "2024",
    tools: ["SolidWorks", "AutoCAD", "FEA Analysis"],
    details: [
  "This is a pilot plant which primarily aims to verify that magnesium can be extracted from flyash.",
  "The plant is located at a flyash facility and requires the waste (flyash) to be processed through a furnace to produce/extract the magnesium.",
  "This requires a number of automated systems to pass the product into and out of the furnace and capture the produced magnesium.",
  "I was the lead designer on this project, working closely with an external consultancy and coordinating with a wide range of stakeholders to align design development with evolving delivery dates, while also managing interfaces with equipment that was not fully designed at the time. I organised and oversaw the fabrication of two shuttles and the associated catenary system, ensuring designs were build-ready and clearly communicated to suppliers. A full FEA analysis was conducted on all of our systems prior to fabrication to validate structural performance and confirm the design met safety and operational requirements."
],

  },

  {
    id: "dobinsons",
    title: "Suspension Spring Finishing Line",
    images: [dobinsons1, dobinsons2, dobinsons3, dobinsons4, dobinsons5, dobinsons6, dobinsons7],
    description: "Suspension spring unloading, validation and wrapping cell ",

    role: "Mechanical Design Engineer",
    client: "Fast Automation (Dobinsons)",
    year: "2023",
    tools: ["SolidWorks, Pneumatics design, Simulation"],
    details: [
      "The Automated Spring Packaging system is part of Dobinson’s suspension spring production line. Suspension springs are conveyed out from a powder coating station and are required to be scanned, inkjet-print labelled, wrapped, fed out on a belt conveyor, and have a paper label applied before reaching an operator for manual palletization.",
      "I was the lead designer on this project, responsible for the design of the unhooking station, validation station, and robot gripper. Extensive testing was carried out due to the complexity of the product range, with over 4,000 variations requiring robust and repeatable handling. I coordinated and organised external integrators for labelling and inkjet systems and also managed the interstate installation of the cell to ensure smooth delivery and site integration. I worked closely with the controls and robotics engineers to simulate and implement a complex data tracking system, ensuring reliable product identification and traceability throughout the process."

    ]
  },

  {
    id: "stilcon",
    title: "Steel fabrication low cost AGV",
    images: [stilcon1, stilcon2, stilcon3, stilcon4, stilcon5, stilcon6, stilcon7],
    role: "Mechanical Design Engineer",
    client: "Fast Automation (confidential client)",
    year: "2023",
    tools: ["SolidWorks, Hydraulics design, Battery Specification"],
    description: "Low cost industrial AGV",

    details: [
      "This project is to design and build a pilot vehicle used in the Stilcon fabrication building. The main purpose of this vehicle is to help in the design of a fleet of trolleys that can increase the throughput of fabrication works through the Stilcon facility by replacing the existing gantry crane with operator-controlled fabrication trolleys. The fabrication trolleys will operate on a floor mounted guidance system and will allow overtaking and individual process flow for each trolley. The fabrication trolley will act as a workstation for the operators.",
      "Lead mechanical design engineer on this project, delivered under strict cost constraints due to its transition into a production fleet. I designed the frame and guidance system and completed the required calculations to size and specify the hydraulic and battery systems. I also sourced and qualified overseas suppliers to reduce component costs, keeping the off-the-shelf parts budget under $17K AUD while maintaining performance and reliability targets."
    ]
  },

  {
    id: "corinthian",
    title: "Pallet Management and Product Strapping",
    role: "Mechanical Design Engineer",
    client: "Fast Automation (Corinthian Doors)",
    year: "2023",
    tools: ["SolidWorks, AutoCad, Procurment"],
    images: [corinthian1, corinthian2, corinthian3, corinthian4, corinthian5, corinthian6, corinthian7],
    description: "Pallet Management and Product Strapping System with Door stacking and integrated AMR",

     details: [
      "The integration of advanced automated cells for the stacking and strapping process at the clients plant is engineered to optimise operational efficiency and enhance workplace safety. This system automates the stacking and strapping of door products utilising two separate sub-systems, the Unitising Line and the Celaschi Line. By automating these tasks, the system reduces manual intervention and handling, minimizes the risk of human error, and ensures consistent application of strapping parameters, and therefore improves overall process reliability and safety of the plant.",
      "Lead designer on Fast Automation’s largest project at the time (~$2M AUD). I specified and integrated conveyor systems to interface with an existing line and a larger strapping unit, working within tight building and layout constraints to achieve a workable, efficient footprint. I also designed a fully automated door stacking system that integrates with an AMR, improving material flow and reducing manual handling across the end-of-line process."
    
    ]


  },

  {
    id: "fyp",
    title: "Seaweed Harvester",
    role: "Product designer/Mechanical Designer",
    client: "The Seaweed Company, University of Limerick",
    images: [fyp1, fyp2, fyp3, fyp4, fyp5, fyp6,fyp7],
    description: "Seaweed harvester fo use on growing nets",

    details: [
      "As part of my final year project in Product Design and Technology and in conjunction with The Seaweed company I designed a seaweed harvester for use on seaweed cultivation nets.This harvester was the first of its kind that cuts and collects seaweed grown at sea. I was repsonsible for the design and manufacturing of the harvester which is currently in operation.",
      "The Sicklebar Seaweed harvester was the first project from Product Design and Technology to be built. The Sicklebar Seaweed harvester was commisioned by The Seaweed Company and has progressively improved through operation."
    ]
  }
];
