import React, { useState, useEffect } from "react";
import { Pagination } from "../../../common/components/Pagination";
import PageLayout from "../../../common/layout/PageLayout";
// import { H4, P } from "../../common/components/elements/Text";
import { H4, P, H3, H1 } from "../../../common/components/elements/Text";
import { LinkedItem } from "../../../common/components/elements/LinkedItem";
import { AxiosGet } from "../../../lib/axios";
import { LoadingAnimation } from "../../../common/LoadingAnimation";
import { ViewMockCards } from "../../../common/components/ViewCards";
import { ViewCards } from "../../../common/components/ViewCards";
export default function MockInterview({ router }) {
  const { page } = router.query || "";

  const [pageLength, setPageLength] = useState(10);

  const [mockInterviews, setMockInterviews] = useState([]);
  const [searchInputText, setSearchInputText] = useState("");
  const dummyData = [
    { _id: 1, postTitle: "JP Morgan", company: "JP Morgan Chase Co" },
    { _id: 2, postTitle: "SAP", company: "SAP" },
    { _id: 3, postTitle: "CHUBB", company: "CHUBB" },
    { _id: 4, postTitle: "SGGSC", company: "SGGSC" },
  ];

  const filteredMockInterviewsDetails = dummyData.filter((interview) => {
    if (searchInputText === "") {
      return interview;
    } else {
      return (
        interview.postTitle.toLowerCase().includes(searchInputText) ||
        interview.company.toLowerCase().includes(searchInputText)
      );
    }
  });

  // console.log(filteredMockInterviewDetails);
  const Component = () => {
    return (
      // <div className="py-4 px-2 flex flex-col items-center">
      <>
        <PageLayout title="Mock Interview" className="mt-10">
          <ViewMockCards
            data={dummyData}
            title=" WORRIED OF INTERVIEWS ?"
            text="TAKE MOCK INTERVIEWS"
            setSearchInputText={setSearchInputText}
          >
            {filteredMockInterviewsDetails.map((mockInterview) => (
              <LinkedItem
                key={mockInterview._id}
                href={`/interviews/mock/${mockInterview._id}`}
                className="w-80 h-60 flex flex-col gap-2 bg-white p-2 text-black rounded-lg border-[2px] border-primary-200 duration-300 shadow-md hover:shadow-primary-600"
              >
                <div className="h-5/6 py-3 px-4 flex flex-col  justify-around bg-primary-100 rounded-lg text-center">
                  <H4 className="font-semibold">{mockInterview.postTitle}</H4>
                </div>
                <P className="text-center pt-0.5">
                  Tags: {mockInterview.company}
                </P>
              </LinkedItem>
            ))}
          </ViewMockCards>
        </PageLayout>

        {/* {page} */}
        {/* </div>  */}
      </>
    );
  };
  console.log(searchInputText);

  return (
    <>
      <Component />
      {/* <PageLayout title="Mock Interview">

     <Pagination
        page={parseInt(page)}
        Component={Component}
        length={pageLength}
      />
     </PageLayout> */}
    </>
  );
}
