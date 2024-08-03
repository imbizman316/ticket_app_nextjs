import React from "react";
import TicketCard from "./(components)/TicketCard";
import ThreeScene from "./(components)/ThreeScene";

const getTickets = async () => {
  try {
    console.log("it started ORIGIN");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/Tickets`.trim(),
      {
        cache: "no-store",
      }
    );

    //   return res.json();
    // } catch (error) {
    //   console.log("Failed to get tickets", error);
    // }

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Failed to get tickets", error);
    return { tickets: [] }; // Return an empty array in case of error
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  console.log(uniqueCategories);

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>

      <ThreeScene />

      <div>Hello my friend</div>
    </div>
  );
};

export default Dashboard;
