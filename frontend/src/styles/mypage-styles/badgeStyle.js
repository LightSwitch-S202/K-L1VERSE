import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  width: 390px;
  height: 61px;
`;

export const TitleText = styled.div`
  padding: 12px 16px 0px 16px;
  color: var(--blue1, #026);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const BadgeContainer = styled.div`
  display: flex;
  width: 358px;
  padding: 0px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const BadgeLineContainer = styled.div`
  display: flex;
  width: 340px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const BadgeBackground = styled.div`
  display: flex;
  width: 50px;
  padding: 4px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  &:hover {
    background-color: #e5edfb;
    border-radius: 4px;
  }
`;

export const BadgeText = styled.div`
  color: var(--gray1, #222);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ConfirmContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 390px;
  margin-top: 40px;
`;

export const ConfirmTextContainer = styled.div`
  display: flex;
  width: 290px;
  padding: 12px 24px;
  flex-direction: column;
  gap: 10px;
  border-radius: 8px;
  background-color: #3261c1;
`;

export const ConfirmText = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

export const PurchaseTextContainer = styled.div`
  display: flex;
  width: 290px;
  padding: 12px 24px;
  flex-direction: column;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid #3261c1;
  background-color: #fff;
`;

export const PurchaseText = styled.div`
  color: #3261c1;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

export const DisabledConfirmContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 390px;
  margin-top: 40px;
`;

export const DisabledTextContainer = styled.div`
  display: flex;
  width: 290px;
  padding: 12px 24px;
  flex-direction: column;
  gap: 10px;
  border-radius: 8px;
  background-color: #f4f4f4;
`;

export const DisabledText = styled.div`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

export const BadgeImageStyle = ({ code, isBadgeEarned }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="55"
      viewBox="0 0 44 55"
      fill="none"
    >
      <g filter="url(#filter0_d_314_260)">
        <path
          d="M36.08 38.8533C37.2457 38.0449 38 36.6975 38 35.193L37.9771 10.4912C37.9771 8.02105 35.9429 6 33.4286 6L10.5714 6C8.05714 6 6.02286 8.02105 6.02286 10.4912L6 35.193C6 36.6975 6.75428 38.0449 7.92 38.8533L22 48.6667L36.08 38.8533Z"
          fill="white"
        />
        <path
          d="M35.966 38.689L35.9656 38.6893L22 48.4229L8.03436 38.6893L8.03397 38.689C6.92012 37.9165 6.20006 36.6296 6.2 35.1932C6.2 35.1931 6.2 35.193 6.2 35.193L6.22286 10.4914L6.22286 10.4912C6.22286 8.13354 8.16556 6.2 10.5714 6.2L33.4286 6.2C35.8344 6.2 37.7771 8.13354 37.7771 10.4912L37.7771 10.4914L37.8 35.193C37.8 36.6295 37.0799 37.9165 35.966 38.689Z"
          stroke="#002266"
          strokeWidth="0.4"
        />
      </g>

      <image
        href={`/badge/badge${code}.png`}
        width="28"
        height="28"
        x="8"
        y="10"
        filter={isBadgeEarned ? null : "url(#grayscaleFilter)"}
      />

      <defs>
        <filter id="grayscaleFilter">
          <feColorMatrix
            type="matrix"
            values="0.33 0.33 0.33 0 0
                            0.33 0.33 0.33 0 0
                            0.33 0.33 0.33 0 0
                            0    0    0    1 0"
          />
        </filter>
        <filter
          id="filter0_d_314_260"
          x="0"
          y="0"
          width="44"
          height="54.6665"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_314_260"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_314_260"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
