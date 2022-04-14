import ReactECharts from "echarts-for-react";
import CompaniesLikes from "../components/CompaniesLikes";
import styled from "styled-components";
import * as React from "react";
import LikeButton from "./LikeButton";
import Job from "../types/Job";

const Box = styled.div`
  display: block;
`;

type Props = {
  list: Job[];
};

const Page = (props: Props) => {
  const result = props.list.slice(16).map((item) => {
    return { value: item.rating, name: item.company };
  });
  const [companyRating, setCompanyRating] = React.useState(result);
  const option = {
    title: {
      text: "Top Copmanies",
      subtext: "",
      x: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
    },
    series: [
      {
        name: "",
        type: "pie",
        radius: "60%",
        center: ["50%", "40%"],
        data: companyRating,
        itemStyle: {
          emphasis: {
            shadowBlur: 90,
            shadowOffsetX: 0,
            shadowColor: "rgba(28, 8, 160, 0.5)",
          },
        },
      },
    ],
  };
  return (
    <>
      <ReactECharts option={option} style={{ height: 800, width: 900 }} />
      <Box>
        {companyRating.map((item) => (
          <div>
            <CompaniesLikes name={item.name} rating={item.value} />
            <LikeButton
              handleLike={() => {
                setCompanyRating(
                  companyRating.map((company) => {
                    if (company.name === item.name) {
                      return {
                        name: company.name,
                        value: Number(company.value) + 5,
                      };
                    }
                    return company;
                  })
                );
              }}
              handleSuperLike={() => {
                setCompanyRating(
                  companyRating.map((company) => {
                    if (company.name === item.name) {
                      return {
                        name: company.name,
                        value: Number(company.value) + 10,
                      };
                    }
                    return company;
                  })
                );
              }}
              handleDislike={() => {
                setCompanyRating(
                  companyRating.map((company) => {
                    if (company.name === item.name) {
                      return {
                        name: company.name,
                        value: Number(company.value) - 5,
                      };
                    }
                    return company;
                  })
                );
              }}
              handleSuperDislike={() => {
                setCompanyRating(
                  companyRating.map((company) => {
                    if (company.name === item.name) {
                      return {
                        name: company.name,
                        value: Number(company.value) - 10,
                      };
                    }
                    return company;
                  })
                );
              }}
            />
          </div>
        ))}
      </Box>
    </>
  );
};

export default Page;
