import React, { Fragment } from 'react';
import styled from 'styled-components';
import ImageContainer from '../commons/imageContainer';
import PostgreSQLImg from '../../images/postgresql.png';
import MySQLImg from '../../images/mysql.png';
import MongoDBImg from '../../images/mongodb.png';

const CenterH1 = styled.h1`
    text-align: center;
`;
const ImageContainerWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const frontend = () => (
    <Fragment>
        <CenterH1>Databases</CenterH1>
        <ImageContainerWrapper>
            <ImageContainer src={PostgreSQLImg} text="PostgreSQL" />
            <ImageContainer src={MySQLImg} text="MySQL" />
            <ImageContainer src={MongoDBImg} text="MongoDB" />
        </ImageContainerWrapper>
    </Fragment>
);

export default frontend;
