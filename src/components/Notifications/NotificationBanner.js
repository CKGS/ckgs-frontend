// src/components/NewsBanner.js
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import "./file.css";
import Ticker, { FinancialTicker, NewsTicker } from "nice-react-ticker";

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRpWQDGiJ2uc72lX5mxSwMTthEYSMzD084wQQu7B-f2B0pKtpQ8kffcDZOPqj9yE78iR9yYpbU5GsWl/pub?gid=0&single=true&output=csv";

const NotificationBanner = () => {
  const [news, setNews] = useState("");

  useEffect(() => {
    fetch(SHEET_CSV_URL)
      .then((response) => response.text())
      .then((csvText) => {
        const parsed = Papa.parse(csvText, { header: true });
        if (parsed.data && parsed.data) {
          setNews(parsed.data);
        }
      });
  }, []);

  return (
    <div className="news-banner">
      <div className="ticker-wrap">
        <div className="ticker-move">
          {news ? (
            news.map((note, idx) => {
              return (
                <span className="ticker-item" key={idx}>
                  <span className="separator">☆</span>
                  {note.Message}
                  <span className="separator">☆</span>
                </span>
              );
            })
          ) : (
            <p>Welcome to our page</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationBanner;
