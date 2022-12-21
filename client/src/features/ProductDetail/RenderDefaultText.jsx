import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Grid, Stack, Typography } from "@mui/material";
import { Markup } from "interweave";
import React, { useState } from "react";
import { deliver, gift, guarantee, maintain } from "../../data/ProductDetail";

export const RenderDefaultText = () => {
  const [isReadGiftMore, setIsReadGiftMore] = useState(true);
  const [isReadDeliverMore, setIsReadDeliverMore] = useState(true);
  const [isReadMaintainMore, setIsReadMaintainMore] = useState(true);
  const [isReadGuaranteeMore, setIsReadGuaranteeMore] = useState(true);

  const renderGiftText = () => {
    return isReadGiftMore ? "" : <Markup content={gift} />;
  };

  const renderDeliverText = () => {
    return isReadDeliverMore ? "" : <Markup content={deliver} />;
  };

  const renderMaintainText = () => {
    return isReadMaintainMore ? "" : <Markup content={maintain} />;
  };

  const renderGuaranteeText = () => {
    return isReadGuaranteeMore ? "" : <Markup content={guarantee} />;
  };
  return (
    <>
      <Grid className="renderText" item xs={12}>
        <Stack direction="row" spacing={4}>
          <Typography style={{ fontSize: 25, fontWeight: 200 }}>
            Quà tặng
          </Typography>
          <span
            onClick={(e) => setIsReadGiftMore(!isReadGiftMore)}
            className="hideShow"
          >
            {isReadGiftMore ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
          </span>
        </Stack>
        {renderGiftText()}
      </Grid>
      <Grid className="renderText" item xs={12}>
        <Stack direction="row" spacing={4}>
          <Typography style={{ fontSize: 25, fontWeight: 200 }}>
            Giao hàng và lắp ráp
          </Typography>
          <span
            onClick={(e) => setIsReadDeliverMore(!isReadDeliverMore)}
            className="hideShow"
          >
            {isReadDeliverMore ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
          </span>
        </Stack>
        {renderDeliverText()}
      </Grid>
      <Grid className="renderText" item xs={12}>
        <Stack direction="row" spacing={4}>
          <Typography style={{ fontSize: 25, fontWeight: 200 }}>
            Bảo dưỡng miễn phí
          </Typography>
          <span
            onClick={(e) => setIsReadMaintainMore(!isReadMaintainMore)}
            className="hideShow"
          >
            {isReadMaintainMore ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
          </span>
        </Stack>
        {renderMaintainText()}
      </Grid>
      <Grid className="renderText" item xs={12}>
        <Stack direction="row" spacing={4}>
          <Typography style={{ fontSize: 25, fontWeight: 200 }}>
            Bảo hành
          </Typography>
          <span
            onClick={(e) => setIsReadGuaranteeMore(!isReadGuaranteeMore)}
            className="hideShow"
          >
            {isReadGuaranteeMore ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
          </span>
        </Stack>
        {renderGuaranteeText()}
      </Grid>
    </>
  );
};
