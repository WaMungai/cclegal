import React from "react";
import Partners from "../components/Partners";
import TeamMembers from "../components/TeamMembers";

export default function TeamPage() {
  return (
    <div id="team" className="pt-16">
      <Partners />
      <TeamMembers />
    </div>
  );
}
