import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

const FooterBanner = ({ children }) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowBanner(true);
    }, 2000);
  }, []);

  return (
    <StyledFooterBanner>
      {showBanner && (
        <div
          className={`footer-banner shadow bg-danger d-flex justify-content-center align-items-center p-3`}
        >
          <slot />
          <button
            onClick={() => setShowBanner(false)}
            className="close btn d-flex justify-content-center align-items-center fw-bold text-white"
          >
            X
          </button>
          {children}
        </div>
      )}
    </StyledFooterBanner>
  );
};
const StyledFooterBanner = styled.div`
  .footer-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    height: 200px;
    border-radius: 1rem 1rem 0 0;
    animation: 1s fadeOut ease;
    -moz-animation: 1s fadeOut ease;
    -webkit-animation: 1s fadeOut ease;
  }

  @keyframes fadeOut {
    from {
      bottom: -100%;
    }
    to {
      bottom: 0;
    }
  }
  @-moz-keyframes fadeOut {
    from {
      bottom: -100%;
    }
    to {
      bottom: 0;
    }
  }
  @-webkit-keyframes fadeOut {
    from {
      bottom: -100%;
    }
    to {
      bottom: 0;
    }
  }
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;
export default FooterBanner;

// <style>
// 	.footer-banner {
// 		position: fixed;
// 		bottom: 0;
// 		left: 0;
// 		width: 100%;
// 		z-index: 9999;
// 		height: 200px;
// 		border-radius: 1rem 1rem 0 0;
// 		animation: 1s fadeOut ease;
// 		-moz-animation: 1s fadeOut ease;
// 		-webkit-animation: 1s fadeOut ease;
// 	}

// 	@keyframes fadeOut {
// 		from {
// 			bottom: -100%;
// 		}
// 		to {
// 			bottom: 0;
// 		}
// 	}
// 	@-moz-keyframes fadeOut {
// 		from {
// 			bottom: -100%;
// 		}
// 		to {
// 			bottom: 0;
// 		}
// 	}
// 	@-webkit-keyframes fadeOut {
// 		from {
// 			bottom: -100%;
// 		}
// 		to {
// 			bottom: 0;
// 		}
// 	}
// 	.close {
// 		position: absolute;
// 		top: 10px;
// 		right: 10px;
// 	}
// </style>
