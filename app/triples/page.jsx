import React from "react";
import MemberCard from "../(components)/MemberCard";
import Image from "next/image";
import Kaede from "../../public/images/kaede.jpg";

const getMembers = async () => {
  try {
    console.log("it started");
    const res = await fetch(`${process.env.URL}/api/Members`, {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log("Failed to get tickets", error);
  }
};

async function TripleS() {
  // const { members } = await getMembers();

  return (
    <div>
      <h1>Here are the girls</h1>
      {/* <div>
        {members?.map((member) => (
          <div key={member._id}>
            <h4>{member.name}</h4>
            <Image src={Kaede} alt={member.name} width={200} height="auto" />
            <h5>{member.mbti}</h5>
            <h5>{member.country}</h5>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default TripleS;
