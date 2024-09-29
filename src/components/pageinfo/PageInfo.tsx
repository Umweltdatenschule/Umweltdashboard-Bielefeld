"use client";
import { useParams } from "next/navigation";
import React from "react";
import styles from "./PageInfo.module.css";
const PageInfo = () => {
  const id = useParams();
  return <div className={styles.pageInfo}>{id.id}</div>;
};

export default PageInfo;
