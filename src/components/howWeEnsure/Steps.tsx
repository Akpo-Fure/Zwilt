import styled from "styled-components";
import { useState } from "react";
import fontSizes from "../../constants/fonts";
import device from "../../constants/breakpoints";
import colors from "../../constants/colors";
import ActiveIcon from "../../assets/InactiveIcon.png";
import InactiveIcon from "../../assets/ActiveIcon.png";

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1em;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 0em;
  padding: 0.5em;
  color: ${colors.black1};
  border: 1px solid ${colors.white2};
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

const EnsureSteps = () => {
  //   const steps = [
  //     {
  //       title: "Resume Screening",
  //       description: "We screen resumes to find the best candidates for the job.",
  //     },
  //     {
  //       title: "Video Interview",
  //       description:
  //         "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cltural fit",
  //     },
  //     {
  //       title: "Technical Evaluation",
  //       description:
  //         "Candidates are evaluated on their technical skills through a series of tests and assignments.",
  //     },
  //     {
  //       title: "Application Review",
  //       description:
  //         "We review the candidates application to ensure they meet the requirements of the job.",
  //     },
  //     {
  //       title: "Lets get to work",
  //       description: "We provide you with the best candidates to choose from.",
  //     },
  //   ];

  const steps = [
    {
      title: "Resume Screening",
      description:
        "In the resume screening phase, we meticulously review each candidate's resume to find the best matches for the job. This process involves analyzing qualifications, experience, and achievements to identify individuals who meet the criteria set for the position.",
    },
    {
      title: "Video Interview",
      description:
        "During the video interview stage, candidates undergo a comprehensive assessment through skill-based questions conducted in a virtual setting. This allows us to gauge not only their technical competencies but also their personality traits and cultural fit within your organization. By interacting with candidates face-to-face, albeit virtually, we can gain valuable insights into their communication skills, problem-solving abilities, and professional demeanor.",
    },
    {
      title: "Technical Evaluation",
      description:
        "The technical evaluation phase involves a rigorous examination of candidates' technical skills. Through a series of tests, coding challenges, and assignments, we assess their proficiency in relevant technologies and their ability to solve real-world problems. This evaluation ensures that the candidates possess the necessary technical acumen to excel in the role they're applying for.",
    },
    {
      title: "Application Review",
      description:
        "In the application review process, we thoroughly examine each candidate's application to ensure they meet the specific requirements of the job. This includes verifying qualifications, certifications, and any additional documents submitted. By scrutinizing applications, we ensure that only qualified candidates proceed to the next stages of the hiring process, maintaining the quality and relevance of the candidate pool.",
    },
    {
      title: "Let's get to work",
      description:
        "Once the screening, interviewing, and evaluation processes are complete, we provide you with a curated list of the best candidates to choose from. These candidates have successfully passed our rigorous selection criteria and are well-suited for the job based on their skills, experience, and fit with your organization's culture",
    },
  ];

  const [active, setActive] = useState<number | null>(0);

  return (
    <FlexColumn>
      {steps.map((step, index) => (
        <Container
          style={{
            boxShadow:
              active === index ? "0px 15px 30px 0px #00000012" : "none",
          }}
          onMouseEnter={() => setActive(index)}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1em",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={active === index ? ActiveIcon : InactiveIcon}
              alt="Icon"
            />
            <p
              style={{
                color: colors.black1,
                fontSize: fontSizes.l,
              }}
            >
              <span
                style={{
                  fontWeight: "600",
                }}
              >
                Step {index + 1}:{" "}
              </span>
              {step.title}
            </p>
          </div>
          {active === index && (
            <p
              style={{
                color: colors.black1,
                fontSize: fontSizes.l,
                margin: "0.5em",
              }}
            >
              {step.description}
            </p>
          )}
        </Container>
      ))}
    </FlexColumn>
  );
};

export default EnsureSteps;
