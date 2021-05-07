import React from "react";
import Section from "components/Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "components/SectionHeader";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  accordion: {
    // Remove shadow
    boxShadow: "none",
    "&:before": {
      // Remove default divider
      display: "none",
    },
    // Add a custom border
    "&:not(:last-child)": {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  },
  expanded: {
    margin: `0 !important`,
  },
  summary: {
    minHeight: 78,
  },
  summaryContent: {
    margin: "0 !important",
  },
}));

function FaqSection(props) {
  const classes = useStyles();

  const items = [
    {
      question: "Carbon Footprint?",
      answer:
        "A carbon footprint is the amount of carbon dioxide and other greenhouse gases (GHG) released into the atmosphere as a result of your activities and lifestyle. Your carbon footprint is the best estimate you can get of your impact to climate change. It is measured in tons of Carbon Dioxide equivalent (tons CO2e).",
    },
    {
      question: "Is it Effective?",
      answer:
        "Carbon offsets directly reduce your impact on the environment. We take the equivalent of your carbon emissions out of the air each month in a safe and effective way. Making carbon neutrality a reality.",
    },
    {
      question: "What are carbon offset credits?",
      answer:
        "A carbon credit is a packaged unit of investment in a project that results in a reduction of CO2 from the atmosphere. By funding and facilitating certain practices, we can quantifiably reduce existing carbon.",
    },
    {
      question: "How do carbon offset credits work?",
      answer:
        "These are projects and practices that take carbon dioxide directly out of the air and sequester it in the Earth. There are many methodologies, one example is Direct Air Capture technology where CO2 is sucked out of the air with big fans and pumped into the ground. Offsets can also come in the form of improved soil health through farming practices to take additional CO2 out of the air. Forestry projects provide a similar result in drawing carbon out of the atmosphere. ",
    },
    {
      question: "Where do they come from?",
      answer:
        "We currently source carbon credits from two certified credit developers - Nori & Bluesource. Offset.Life strives to create our own carbon credits in the future by generating our own carbon negative projects. ",
    },
    {
      question: "How is my footprint calculated?",
      answer: `Your impact on the environment depends on your lifestyle. Our carbon impact questionnaire is designed for us to get a monthly snapshot of your emissions. We utilize the Berkeley CoolClimate API for our carbon emission data. 
        If you connect your bank account we categorize your transaction data from the previous month and multiply each category by their respective emission factor. 
        Money Spent in Category x GHG Emission Factor = Carbon Footprint
      `,
    },
    {
      question: "Why connect my bank account? ",
      answer:
        "Everything we do has an impact on the environment. Monthly spending is the most effective and effortless way to quantify your carbon footprint. This allows you to more accurately see a breakdown of your emissions and be informed with ways to reduce your footprint in the long-term. ",
    },
    {
      question: "Is it secure?",
      answer:
        "Through the Plaid API, which is utilized by companies like PayPal and AmEx, your data is completely secure. We have view-only access to your transactions, do not see your login details, and do not sell your data to third parties. You can revoke access at any time. ",
    },
    {
      question: "Is it Expensive?",
      answer:
        "The cost of offsetting your emissions on our platform depends on the calculation of your footprint each month. Our goal is to empower and encourage you to reduce your footprint over time so you save money and the planet. ",
    },
    {
      question: "Why subscribe?",
      answer:
        "As an Offsetter, you continually fund carbon reduction projects monthly based on your calculated footprint. You are taking action against the climate crisis and can ease your mind. You can pause, change the amount you offset, or cancel your subscription anytime.",
    },
    {
      question: "How can businesses utilize our platform?",
      answer:
        "Businesses across the globe are uniting in efforts to achieve carbon neutrality but often only attribute their impacts to operations alone thus leaving out a crucial component... their people! Offset.Life as a service allows firms to offset the impact created by their employees and functions as both an employee benefit and  green business practice.",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container maxWidth="md">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />

        {items.map((item, index) => (
          <Accordion
            classes={{
              root: classes.accordion,
              expanded: classes.expanded,
            }}
            key={index}
          >
            <AccordionSummary
              classes={{
                root: classes.summary,
                content: classes.summaryContent,
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`faq-panel-${index}`}
            >
              <Typography variant="h6">{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails id={`faq-panel-${index}`}>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Section>
  );
}

export default FaqSection;
