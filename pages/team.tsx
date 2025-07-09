import Page from "components/utility/Page";
import Team from "components/team/Team";
import React from "react";

function TeamPage() {
  return (
    <Page
      currentPage="Team"
      meta={{ 
        title: "Our Team", 
        desc: "Meet the talented individuals who make our projects come to life. Each team member brings unique skills and passion to deliver exceptional results." 
      }}
    >
      <Team />
    </Page>
  );
}

export default TeamPage;