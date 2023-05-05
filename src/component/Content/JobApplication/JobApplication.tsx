import React from 'react';
import styled from "styled-components";

type JobApplicationType = {
    img: string
    value: number
    name: string
}

export const JobApplication:React.FC<JobApplicationType> = (props) => {
    const {img, value, name} = props
    return (
        <JobApp>
            <img src={img} alt="img"/>
            <div className="descriptions">
                <h3>{value}</h3>
                <p>{name}</p>
            </div>
        </JobApp>
    );
};

const JobApp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 300px;
    height: 100px;
    background: #39394B;
    border-radius: 10px;
    .descriptions{
      p, h3{
        margin: 0;
      }
    }
    & img{
      width: 40px;
    }
`