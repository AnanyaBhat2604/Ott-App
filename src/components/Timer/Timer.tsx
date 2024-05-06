"use client";

import { calculateTimeDiff } from "@/utils/calculateTimeDiff";
import React, { useState, useEffect, FC } from "react";

const Timer: FC<{ targetDate: Date }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<{
    minutes: string;
    seconds: string;
  }>({
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    setTimeLeft(calculateTimeDiff(targetDate));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeDiff(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <div className="text-white">{`${timeLeft.minutes}:${timeLeft.seconds}`}</div>
    </div>
  );
};

export default Timer;
