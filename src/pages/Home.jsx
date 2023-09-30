import { Card } from "../components/Card";

export const Home = () => {
  return (
    <>
    <Card
      bgcolor="light"
      txtcolor="color"
      header="Casablanca"
      body={
        <button type="button" className="btn btn-info"><a href="./infocasablanca">info</a></button>
      }
    />
    <Card
      bgcolor="light"
      txtcolor="color"
      header="The Wizard of Oz"
      body={
        <button type="button" className="btn btn-info"><a href="./info">info</a></button>
      }
    />
    <Card
      bgcolor="light"
      txtcolor="color"
      header="Citizen Kane"
      body={
        <button type="button" className="btn btn-info"><a href="./infocitizenkane">info</a></button>
      }
    />
    </>
    
  );
};
