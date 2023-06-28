import Icon from "$store/components/ui/Icon.tsx";

export default function MobileApps(
  { content }: { content: { apple?: string; android?: string } },
) {
  return (
    <>
      {(content?.apple || content?.android) && (
        <div class="flex gap-2">
          {content?.apple && (
            <a href={content?.apple} target="_blank">
              <svg
                width="135"
                height="40"
                viewBox="0 0 135 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.52615 39.125C9.18242 39.125 8.847 39.1211 8.50596 39.1143C7.79948 39.1061 7.09466 39.0516 6.39726 38.9512C5.74698 38.8519 5.11703 38.6673 4.52819 38.4033C3.94475 38.1415 3.4126 37.7983 2.95214 37.3867C2.48501 36.98 2.09611 36.5082 1.80084 35.9902C1.50231 35.4688 1.29571 34.9099 1.18824 34.333C1.07218 33.7131 1.00939 33.0863 1.0004 32.458C0.993251 32.2471 0.983887 31.5449 0.983887 31.5449V8.44434C0.983887 8.44434 0.99386 7.75293 1.00046 7.5498C1.00906 6.92248 1.07149 6.29665 1.1872 5.67773C1.29488 5.09925 1.50163 4.53875 1.80032 4.01563C2.0945 3.49794 2.48125 3.02586 2.94556 2.61768C3.40936 2.20562 3.9432 1.8606 4.52763 1.59521C5.11512 1.33209 5.74388 1.14873 6.39285 1.05127C7.09254 0.949836 7.79981 0.894996 8.50874 0.88721L9.5267 0.875H125.467L126.497 0.8877C127.199 0.895099 127.9 0.94945 128.593 1.05029C129.249 1.14898 129.884 1.33362 130.478 1.59814C131.649 2.13299 132.602 2.97916 133.203 4.01807C133.497 4.53758 133.7 5.09351 133.807 5.66699C133.924 6.29099 133.989 6.92174 134.003 7.5542C134.006 7.8374 134.006 8.1416 134.006 8.44434C134.015 8.81934 134.015 9.17627 134.015 9.53613V30.4648C134.015 30.8281 134.015 31.1826 134.006 31.54C134.006 31.8652 134.006 32.1631 134.002 32.4697C133.988 33.0909 133.924 33.7104 133.809 34.3232C133.704 34.9043 133.498 35.4675 133.2 35.9932C132.902 36.5056 132.516 36.9733 132.054 37.3789C131.593 37.7927 131.06 38.1379 130.475 38.4014C129.883 38.6674 129.248 38.8527 128.593 38.9512C127.896 39.0522 127.191 39.1067 126.485 39.1143C126.154 39.1211 125.808 39.125 125.472 39.125L124.249 39.127L9.52615 39.125Z"
                  fill="black"
                />
                <path
                  d="M24.768 20.3006C24.7788 19.4659 25.0005 18.6475 25.4125 17.9216C25.8245 17.1956 26.4135 16.5857 27.1246 16.1485C26.6728 15.5034 26.0769 14.9724 25.3841 14.5979C24.6912 14.2233 23.9206 14.0155 23.1334 13.9908C21.4542 13.8146 19.8262 14.9957 18.9705 14.9957C18.0982 14.9957 16.7807 14.0083 15.362 14.0375C14.4443 14.0672 13.55 14.334 12.7661 14.8121C11.9822 15.2901 11.3356 15.9631 10.8891 16.7654C8.9551 20.1138 10.3977 25.0349 12.2503 27.7415C13.1772 29.0668 14.2605 30.5473 15.6779 30.4948C17.065 30.4372 17.583 29.6103 19.2573 29.6103C20.9161 29.6103 21.4021 30.4948 22.8483 30.4614C24.3367 30.4372 25.2745 29.1302 26.1688 27.7923C26.8348 26.8479 27.3473 25.8042 27.6873 24.6997C26.8225 24.334 26.0846 23.7218 25.5655 22.9395C25.0464 22.1572 24.769 21.2394 24.768 20.3006Z"
                  fill="white"
                />
                <path
                  d="M22.0366 12.2108C22.8481 11.2366 23.2479 9.98445 23.1511 8.72021C21.9113 8.85044 20.766 9.44299 19.9435 10.3798C19.5414 10.8375 19.2334 11.3699 19.0372 11.9467C18.8409 12.5235 18.7603 13.1333 18.7998 13.7412C19.42 13.7476 20.0335 13.6132 20.5941 13.3481C21.1548 13.083 21.648 12.6942 22.0366 12.2108Z"
                  fill="white"
                />
                <path
                  d="M42.3013 27.1397H37.5679L36.4312 30.4961H34.4263L38.9097 18.0781H40.9927L45.4761 30.4961H43.437L42.3013 27.1397ZM38.0581 25.5908H41.8101L39.9605 20.1436H39.9087L38.0581 25.5908Z"
                  fill="white"
                />
                <path
                  d="M55.1587 25.9697C55.1587 28.7832 53.6529 30.5908 51.3804 30.5908C50.8047 30.6209 50.2322 30.4883 49.7285 30.2082C49.2247 29.928 48.8099 29.5117 48.5318 29.0068H48.4888V33.4912H46.6304V21.4423H48.4292V22.9482H48.4634C48.7544 22.4457 49.1761 22.0316 49.6837 21.7497C50.1914 21.4679 50.7659 21.3289 51.3462 21.3476C53.644 21.3476 55.1587 23.164 55.1587 25.9697ZM53.2486 25.9697C53.2486 24.1367 52.3013 22.9316 50.856 22.9316C49.4361 22.9316 48.481 24.1621 48.481 25.9697C48.481 27.7939 49.4361 29.0156 50.856 29.0156C52.3013 29.0156 53.2486 27.8193 53.2486 25.9697Z"
                  fill="white"
                />
                <path
                  d="M65.1236 25.9697C65.1236 28.7832 63.6177 30.5908 61.3452 30.5908C60.7696 30.6209 60.1971 30.4883 59.6933 30.2081C59.1895 29.928 58.7748 29.5117 58.4966 29.0068H58.4536V33.4912H56.5952V21.4423H58.394V22.9482H58.4282C58.7192 22.4457 59.1409 22.0315 59.6485 21.7497C60.1562 21.4679 60.7307 21.3289 61.311 21.3476C63.6089 21.3476 65.1236 23.164 65.1236 25.9697ZM63.2134 25.9697C63.2134 24.1367 62.2661 22.9316 60.8208 22.9316C59.4009 22.9316 58.4458 24.1621 58.4458 25.9697C58.4458 27.7939 59.4009 29.0156 60.8208 29.0156C62.2661 29.0156 63.2134 27.8193 63.2134 25.9697Z"
                  fill="white"
                />
                <path
                  d="M71.7095 27.0362C71.8472 28.2676 73.0435 29.0762 74.6783 29.0762C76.2447 29.0762 77.3716 28.2676 77.3716 27.1572C77.3716 26.1934 76.6919 25.6162 75.0826 25.2207L73.4732 24.833C71.1929 24.2822 70.1343 23.2158 70.1343 21.4854C70.1343 19.3428 72.0015 17.8711 74.6529 17.8711C77.2769 17.8711 79.0757 19.3428 79.1363 21.4854H77.2603C77.148 20.2461 76.1235 19.4981 74.6265 19.4981C73.1294 19.4981 72.105 20.2549 72.105 21.3565C72.105 22.2344 72.7593 22.751 74.3599 23.1465L75.728 23.4824C78.2759 24.0849 79.3345 25.1084 79.3345 26.9248C79.3345 29.248 77.4839 30.7031 74.5405 30.7031C71.7866 30.7031 69.9272 29.2822 69.8071 27.0361L71.7095 27.0362Z"
                  fill="white"
                />
                <path
                  d="M83.3452 19.2998V21.4424H85.0669V22.9141H83.3452V27.9053C83.3452 28.6807 83.6899 29.042 84.4468 29.042C84.6512 29.0384 84.8552 29.0241 85.0581 28.999V30.4619C84.7178 30.5255 84.372 30.5543 84.0259 30.5478C82.1929 30.5478 81.478 29.8593 81.478 28.1035V22.9141H80.1616V21.4424H81.478V19.2998H83.3452Z"
                  fill="white"
                />
                <path
                  d="M86.064 25.9697C86.064 23.1211 87.7417 21.3311 90.3579 21.3311C92.9829 21.3311 94.6528 23.1211 94.6528 25.9697C94.6528 28.8262 92.9917 30.6084 90.3579 30.6084C87.7251 30.6084 86.064 28.8262 86.064 25.9697ZM92.7593 25.9697C92.7593 24.0156 91.8638 22.8623 90.3579 22.8623C88.852 22.8623 87.9575 24.0244 87.9575 25.9697C87.9575 27.9316 88.852 29.0762 90.3579 29.0762C91.8638 29.0762 92.7593 27.9316 92.7593 25.9697Z"
                  fill="white"
                />
                <path
                  d="M96.1851 21.4425H97.9575V22.9835H98.0005C98.1204 22.5022 98.4024 22.0769 98.799 21.779C99.1956 21.4811 99.6826 21.3288 100.178 21.3478C100.392 21.347 100.606 21.3703 100.815 21.4171V23.1554C100.545 23.0728 100.263 23.0348 99.98 23.0431C99.71 23.0321 99.4409 23.0797 99.191 23.1826C98.9412 23.2855 98.7165 23.4412 98.5326 23.6391C98.3486 23.837 98.2096 24.0724 98.1252 24.3291C98.0408 24.5857 98.0129 24.8576 98.0435 25.1261V30.4962H96.1851L96.1851 21.4425Z"
                  fill="white"
                />
                <path
                  d="M109.383 27.8369C109.133 29.4805 107.533 30.6084 105.485 30.6084C102.851 30.6084 101.216 28.8437 101.216 26.0127C101.216 23.1729 102.86 21.3311 105.407 21.3311C107.912 21.3311 109.487 23.0518 109.487 25.7969V26.4336H103.092V26.5459C103.063 26.8791 103.104 27.2148 103.215 27.5306C103.325 27.8464 103.501 28.1352 103.731 28.3778C103.962 28.6203 104.241 28.8111 104.551 28.9374C104.86 29.0637 105.194 29.1226 105.528 29.1103C105.967 29.1515 106.408 29.0498 106.784 28.8203C107.161 28.5909 107.454 28.246 107.619 27.8369L109.383 27.8369ZM103.101 25.1348H107.627C107.644 24.8352 107.599 24.5354 107.494 24.2541C107.389 23.9729 107.228 23.7164 107.019 23.5006C106.811 23.2849 106.56 23.1145 106.282 23.0003C106.005 22.8861 105.707 22.8305 105.407 22.8369C105.104 22.8351 104.804 22.8933 104.524 23.008C104.244 23.1227 103.989 23.2918 103.775 23.5054C103.561 23.7191 103.391 23.973 103.275 24.2527C103.159 24.5323 103.1 24.8321 103.101 25.1348Z"
                  fill="white"
                />
                <path
                  d="M37.8252 8.73089C38.2148 8.70293 38.6058 8.76179 38.9699 8.90323C39.334 9.04466 39.6622 9.26514 39.9308 9.54876C40.1993 9.83239 40.4016 10.1721 40.523 10.5434C40.6444 10.9146 40.6819 11.3082 40.6328 11.6957C40.6328 13.602 39.6025 14.6977 37.8252 14.6977H35.6699V8.73089H37.8252ZM36.5967 13.8539H37.7217C38.0001 13.8705 38.2787 13.8249 38.5372 13.7203C38.7958 13.6157 39.0277 13.4547 39.2162 13.2491C39.4047 13.0436 39.545 12.7986 39.6269 12.532C39.7087 12.2653 39.7301 11.9838 39.6894 11.7079C39.7271 11.4331 39.7036 11.1533 39.6205 10.8886C39.5374 10.624 39.3967 10.381 39.2087 10.177C39.0206 9.9731 38.7898 9.81329 38.5327 9.70905C38.2756 9.60481 37.9987 9.55873 37.7217 9.5741H36.5967V13.8539Z"
                  fill="white"
                />
                <path
                  d="M41.6795 12.4443C41.6512 12.1484 41.685 11.8498 41.7789 11.5677C41.8727 11.2857 42.0245 11.0263 42.2244 10.8063C42.4243 10.5864 42.6681 10.4106 42.9399 10.2903C43.2118 10.17 43.5057 10.1079 43.803 10.1079C44.1003 10.1079 44.3943 10.17 44.6661 10.2903C44.938 10.4106 45.1817 10.5864 45.3816 10.8063C45.5816 11.0263 45.7333 11.2857 45.8272 11.5677C45.921 11.8498 45.9549 12.1484 45.9265 12.4443C45.9554 12.7405 45.9219 13.0395 45.8284 13.322C45.7348 13.6045 45.5831 13.8644 45.3831 14.0848C45.1831 14.3052 44.9392 14.4813 44.6671 14.6019C44.395 14.7224 44.1006 14.7847 43.803 14.7847C43.5054 14.7847 43.2111 14.7224 42.9389 14.6019C42.6668 14.4813 42.4229 14.3052 42.2229 14.0848C42.0229 13.8644 41.8713 13.6045 41.7777 13.322C41.6841 13.0395 41.6506 12.7405 41.6795 12.4443ZM45.0125 12.4443C45.0125 11.4682 44.574 10.8974 43.8045 10.8974C43.032 10.8974 42.5975 11.4682 42.5975 12.4443C42.5975 13.4282 43.032 13.9946 43.8045 13.9946C44.574 13.9946 45.0125 13.4243 45.0125 12.4443Z"
                  fill="white"
                />
                <path
                  d="M51.5723 14.6978H50.6504L49.7197 11.3813H49.6494L48.7227 14.6978H47.8096L46.5684 10.1948H47.4697L48.2764 13.6308H48.3428L49.2686 10.1948H50.1211L51.0469 13.6308H51.1172L51.9199 10.1948H52.8086L51.5723 14.6978Z"
                  fill="white"
                />
                <path
                  d="M53.8525 10.1949H54.708V10.9102H54.7744C54.8871 10.6533 55.0771 10.4379 55.3179 10.2941C55.5588 10.1503 55.8386 10.0852 56.1182 10.1079C56.3373 10.0915 56.5573 10.1245 56.7619 10.2046C56.9665 10.2847 57.1504 10.4098 57.3001 10.5707C57.4498 10.7315 57.5614 10.924 57.6266 11.1338C57.6918 11.3436 57.7089 11.5654 57.6768 11.7827V14.6977H56.7881V12.0059C56.7881 11.2823 56.4736 10.9224 55.8164 10.9224C55.6677 10.9155 55.5192 10.9408 55.3811 10.9966C55.243 11.0525 55.1187 11.1375 55.0166 11.2459C54.9144 11.3543 54.837 11.4834 54.7894 11.6246C54.7419 11.7657 54.7255 11.9154 54.7412 12.0635V14.6978H53.8525L53.8525 10.1949Z"
                  fill="white"
                />
                <path
                  d="M59.0928 8.43701H59.9814V14.6978H59.0928V8.43701Z"
                  fill="white"
                />
                <path
                  d="M61.2166 12.4444C61.1883 12.1484 61.2221 11.8499 61.316 11.5678C61.4099 11.2857 61.5617 11.0263 61.7616 10.8064C61.9616 10.5864 62.2053 10.4106 62.4772 10.2903C62.7491 10.17 63.0431 10.1079 63.3403 10.1079C63.6376 10.1079 63.9316 10.17 64.2035 10.2903C64.4754 10.4106 64.7191 10.5864 64.9191 10.8064C65.119 11.0263 65.2708 11.2857 65.3647 11.5678C65.4585 11.8499 65.4924 12.1484 65.4641 12.4444C65.4929 12.7406 65.4595 13.0396 65.3658 13.3221C65.2722 13.6046 65.1205 13.8645 64.9205 14.0849C64.7205 14.3053 64.4766 14.4814 64.2044 14.6019C63.9323 14.7225 63.638 14.7847 63.3403 14.7847C63.0427 14.7847 62.7484 14.7225 62.4762 14.6019C62.2041 14.4814 61.9602 14.3053 61.7602 14.0849C61.5602 13.8645 61.4085 13.6046 61.3149 13.3221C61.2212 13.0396 61.1878 12.7406 61.2166 12.4444ZM64.5496 12.4444C64.5496 11.4683 64.1111 10.8975 63.3416 10.8975C62.5691 10.8975 62.1346 11.4683 62.1346 12.4444C62.1346 13.4283 62.5691 13.9947 63.3416 13.9947C64.1111 13.9947 64.5496 13.4244 64.5496 12.4444Z"
                  fill="white"
                />
                <path
                  d="M66.3999 13.4243C66.3999 12.6138 67.0034 12.1465 68.0747 12.0801L69.2944 12.0098V11.6211C69.2944 11.1455 68.98 10.877 68.3726 10.877C67.8765 10.877 67.5327 11.0591 67.4341 11.3774H66.5737C66.6646 10.604 67.3921 10.1079 68.4136 10.1079C69.5425 10.1079 70.1792 10.6699 70.1792 11.6211V14.6978H69.3237V14.0649H69.2534C69.1107 14.2919 68.9103 14.477 68.6727 14.6012C68.4351 14.7254 68.1687 14.7843 67.9009 14.7719C67.7118 14.7916 67.5208 14.7714 67.34 14.7127C67.1593 14.654 66.9928 14.5581 66.8514 14.4311C66.71 14.3042 66.5967 14.149 66.519 13.9756C66.4412 13.8021 66.4006 13.6144 66.3999 13.4243ZM69.2944 13.0395V12.6631L68.1948 12.7334C67.5747 12.7749 67.2934 12.9858 67.2934 13.3828C67.2934 13.7881 67.645 14.0239 68.1284 14.0239C68.2701 14.0382 68.4132 14.0239 68.5492 13.9819C68.6852 13.9398 68.8113 13.8707 68.9201 13.7789C69.0289 13.6871 69.1181 13.5743 69.1824 13.4473C69.2467 13.3202 69.2848 13.1816 69.2944 13.0395Z"
                  fill="white"
                />
                <path
                  d="M71.3472 12.4444C71.3472 11.0215 72.0786 10.1201 73.2163 10.1201C73.4977 10.1072 73.777 10.1746 74.0215 10.3145C74.2661 10.4544 74.4657 10.661 74.5972 10.9101H74.6636V8.43701H75.5522V14.6978H74.7007V13.9863H74.6304C74.4888 14.2338 74.2822 14.4378 74.0329 14.5763C73.7837 14.7148 73.5013 14.7825 73.2163 14.772C72.0708 14.772 71.3472 13.8706 71.3472 12.4444ZM72.2652 12.4444C72.2652 13.3994 72.7154 13.9741 73.4683 13.9741C74.2173 13.9741 74.6802 13.3911 74.6802 12.4483C74.6802 11.5098 74.2124 10.9185 73.4683 10.9185C72.7202 10.9185 72.2652 11.4971 72.2652 12.4444Z"
                  fill="white"
                />
                <path
                  d="M79.2288 12.4443C79.2005 12.1484 79.2343 11.8498 79.3282 11.5677C79.422 11.2857 79.5738 11.0263 79.7737 10.8063C79.9737 10.5864 80.2174 10.4106 80.4892 10.2903C80.7611 10.17 81.0551 10.1079 81.3523 10.1079C81.6496 10.1079 81.9436 10.17 82.2154 10.2903C82.4873 10.4106 82.731 10.5864 82.9309 10.8063C83.1309 11.0263 83.2826 11.2857 83.3765 11.5677C83.4703 11.8498 83.5042 12.1484 83.4759 12.4443C83.5047 12.7405 83.4713 13.0395 83.3777 13.322C83.2841 13.6045 83.1324 13.8644 82.9324 14.0848C82.7324 14.3052 82.4885 14.4813 82.2164 14.6019C81.9443 14.7224 81.65 14.7847 81.3523 14.7847C81.0547 14.7847 80.7604 14.7224 80.4882 14.6019C80.2161 14.4813 79.9722 14.3052 79.7722 14.0848C79.5722 13.8644 79.4206 13.6045 79.327 13.322C79.2334 13.0395 79.1999 12.7405 79.2288 12.4443ZM82.5618 12.4443C82.5618 11.4682 82.1233 10.8974 81.3538 10.8974C80.5813 10.8974 80.1468 11.4682 80.1468 12.4443C80.1468 13.4282 80.5814 13.9946 81.3538 13.9946C82.1233 13.9946 82.5618 13.4243 82.5618 12.4443Z"
                  fill="white"
                />
                <path
                  d="M84.6685 10.1949H85.5239V10.9102H85.5903C85.703 10.6533 85.893 10.4379 86.1339 10.2941C86.3747 10.1503 86.6545 10.0852 86.9341 10.1079C87.1532 10.0915 87.3732 10.1245 87.5778 10.2046C87.7824 10.2847 87.9663 10.4098 88.116 10.5707C88.2657 10.7315 88.3773 10.924 88.4425 11.1338C88.5077 11.3436 88.5248 11.5654 88.4927 11.7827V14.6977H87.604V12.0059C87.604 11.2823 87.2896 10.9224 86.6323 10.9224C86.4836 10.9155 86.3351 10.9408 86.197 10.9966C86.059 11.0525 85.9346 11.1375 85.8325 11.2459C85.7304 11.3543 85.6529 11.4834 85.6053 11.6246C85.5578 11.7657 85.5414 11.9154 85.5571 12.0635V14.6978H84.6685V10.1949Z"
                  fill="white"
                />
                <path
                  d="M93.5142 9.07373V10.2153H94.4898V10.9639H93.5142V13.2793C93.5142 13.751 93.7085 13.9575 94.1509 13.9575C94.2641 13.9572 94.3773 13.9503 94.4898 13.937V14.6772C94.3302 14.7058 94.1685 14.721 94.0063 14.7226C93.0181 14.7226 92.6245 14.375 92.6245 13.5068V10.9638H91.9097V10.2153H92.6245V9.07373H93.5142Z"
                  fill="white"
                />
                <path
                  d="M95.7036 8.43701H96.5845V10.9185H96.6548C96.7729 10.6591 96.9681 10.4425 97.2138 10.2982C97.4595 10.1539 97.7438 10.0888 98.0278 10.1118C98.2457 10.1 98.4636 10.1364 98.6659 10.2184C98.8682 10.3004 99.0499 10.4261 99.198 10.5864C99.3461 10.7468 99.457 10.9378 99.5228 11.146C99.5886 11.3541 99.6076 11.5742 99.5786 11.7905V14.6978H98.689V12.0098C98.689 11.2905 98.354 10.9263 97.7261 10.9263C97.5734 10.9137 97.4197 10.9347 97.276 10.9878C97.1322 11.0408 97.0017 11.1247 96.8937 11.2334C96.7858 11.3421 96.7028 11.4732 96.6508 11.6173C96.5987 11.7614 96.5787 11.9152 96.5923 12.0679V14.6977H95.7037L95.7036 8.43701Z"
                  fill="white"
                />
                <path
                  d="M104.76 13.482C104.64 13.8935 104.378 14.2495 104.021 14.4877C103.665 14.7258 103.236 14.831 102.809 14.7847C102.513 14.7926 102.218 14.7357 101.945 14.6182C101.673 14.5007 101.429 14.3253 101.231 14.1041C101.033 13.883 100.886 13.6214 100.799 13.3376C100.712 13.0538 100.689 12.7545 100.729 12.4605C100.69 12.1656 100.714 11.8657 100.8 11.581C100.887 11.2964 101.034 11.0336 101.23 10.8105C101.427 10.5874 101.67 10.4093 101.942 10.2881C102.213 10.1669 102.508 10.1054 102.805 10.108C104.058 10.108 104.814 10.964 104.814 12.378V12.6881H101.634V12.7379C101.621 12.9031 101.641 13.0695 101.695 13.2262C101.75 13.383 101.836 13.5267 101.949 13.6481C102.062 13.7696 102.199 13.8661 102.351 13.9315C102.503 13.9969 102.668 14.0297 102.834 14.0279C103.046 14.0534 103.262 14.0151 103.452 13.9179C103.643 13.8207 103.801 13.669 103.905 13.482L104.76 13.482ZM101.634 12.0308H103.909C103.92 11.8797 103.899 11.7279 103.849 11.5852C103.798 11.4425 103.717 11.312 103.613 11.2021C103.509 11.0923 103.382 11.0055 103.242 10.9473C103.102 10.8891 102.952 10.8609 102.8 10.8643C102.647 10.8624 102.494 10.8913 102.352 10.9492C102.209 11.0072 102.08 11.093 101.971 11.2017C101.863 11.3104 101.777 11.4398 101.719 11.5822C101.661 11.7246 101.632 11.8771 101.634 12.0308Z"
                  fill="white"
                />
              </svg>
            </a>
          )}
          {content?.android && (
            <a href={content?.android} target="_blank">
              <svg
                width="135"
                height="40"
                viewBox="0 0 135 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M129.998 40H5.00235C2.25238 40 0.00244141 37.75 0.00244141 35.0001V5.00064C0.00244141 2.25067 2.25238 0.000732422 5.00235 0.000732422H129.998C132.748 0.000732422 134.998 2.25067 134.998 5.00064V35.0001C134.998 37.75 132.748 40 129.998 40Z"
                  fill="#100F0D"
                />
                <path
                  d="M106.936 30.0002H108.802V17.4983H106.936V30.0002ZM123.743 22.0021L121.604 27.422H121.54L119.32 22.0021H117.31L120.64 29.5772L118.741 33.7911H120.687L125.818 22.0025L123.743 22.0021ZM113.16 28.5801C112.55 28.5801 111.697 28.2742 111.697 27.5184C111.697 26.5535 112.759 26.1836 113.675 26.1836C114.495 26.1836 114.882 26.3602 115.38 26.6016C115.235 27.7598 114.238 28.5801 113.16 28.5801ZM113.386 21.7287C112.035 21.7287 110.636 22.324 110.057 23.6428L111.713 24.3341C112.067 23.6428 112.726 23.4178 113.418 23.4178C114.383 23.4178 115.364 23.9963 115.38 25.0259V25.1544C115.042 24.9614 114.318 24.6721 113.434 24.6721C111.648 24.6721 109.831 25.6528 109.831 27.4864C109.831 29.159 111.295 30.2367 112.935 30.2367C114.189 30.2367 114.882 29.6738 115.315 29.0141H115.38V29.9797H117.182V25.1864C117.182 22.9669 115.524 21.7287 113.386 21.7287ZM101.854 23.524H99.2001V19.239H101.854C103.249 19.239 104.041 20.3937 104.041 21.3814C104.041 22.3502 103.249 23.524 101.854 23.524ZM101.806 17.4986H97.3349V30.0005H99.2001V25.2643H101.806C103.874 25.2643 105.907 23.7674 105.907 21.3819C105.907 18.9968 103.874 17.4986 101.806 17.4986ZM77.4256 28.5822C76.1365 28.5822 75.0576 27.5025 75.0576 26.0209C75.0576 24.5221 76.1365 23.4272 77.4256 23.4272C78.6983 23.4272 79.6971 24.5222 79.6971 26.0209C79.6971 27.5025 78.6983 28.5822 77.4256 28.5822ZM79.5682 22.7019H79.5037C79.085 22.2027 78.2791 21.7515 77.2647 21.7515C75.1377 21.7515 73.1885 23.6206 73.1885 26.0209C73.1885 28.4049 75.1377 30.2576 77.2647 30.2576C78.2791 30.2576 79.0849 29.8064 79.5037 29.2912H79.5682V29.9029C79.5682 31.5306 78.6983 32.4001 77.2967 32.4001C76.1533 32.4001 75.4444 31.5786 75.1542 30.886L73.5273 31.5625C73.9941 32.6898 75.2343 34.0758 77.2968 34.0758C79.4881 34.0758 81.3408 32.7867 81.3408 29.645V22.0092H79.5682L79.5682 22.7019ZM82.6298 29.9998H84.4978V17.498H82.6298V29.9998ZM87.2529 25.8757C87.2048 24.2323 88.5262 23.3948 89.4762 23.3948C90.2176 23.3948 90.8453 23.7655 91.0555 24.2968L87.2529 25.8757ZM93.0523 24.4577C92.6981 23.5078 91.6188 21.7515 89.4118 21.7515C87.2204 21.7515 85.4001 23.4753 85.4001 26.0046C85.4001 28.3889 87.2048 30.2576 89.6208 30.2576C91.57 30.2576 92.6981 29.0659 93.1656 28.3729L91.7156 27.4061C91.2321 28.1151 90.5719 28.5823 89.6208 28.5823C88.6708 28.5823 87.9939 28.1472 87.5595 27.2933L93.2457 24.9414L93.0523 24.4577ZM47.7453 23.0566V24.8608H52.0627C51.9338 25.8757 51.5955 26.6167 51.0799 27.1323C50.4514 27.7604 49.4687 28.4534 47.7452 28.4534C45.087 28.4534 43.009 26.3108 43.009 23.6527C43.009 20.9945 45.087 18.8517 47.7452 18.8517C49.1791 18.8517 50.226 19.4156 50.9994 20.1406L52.2724 18.8676C51.1927 17.8367 49.7591 17.0474 47.7452 17.0474C44.1038 17.0474 41.043 20.0117 41.043 23.6527C41.043 27.2933 44.1038 30.2576 47.7452 30.2576C49.7104 30.2576 51.1928 29.6132 52.3525 28.405C53.5447 27.2128 53.9154 25.5374 53.9154 24.184C53.9154 23.7656 53.8829 23.3789 53.8185 23.0566H47.7453ZM58.8244 28.5822C57.5353 28.5822 56.4236 27.5189 56.4236 26.0046C56.4236 24.4741 57.5353 23.4273 58.8244 23.4273C60.113 23.4273 61.2246 24.4741 61.2246 26.0046C61.2246 27.5189 60.113 28.5822 58.8244 28.5822ZM58.8244 21.7515C56.4716 21.7515 54.5548 23.5397 54.5548 26.0046C54.5548 28.4534 56.4716 30.2576 58.8244 30.2576C61.1762 30.2576 63.0934 28.4534 63.0934 26.0046C63.0934 23.5397 61.1762 21.7515 58.8244 21.7515ZM68.1372 28.5822C66.849 28.5822 65.7369 27.5189 65.7369 26.0046C65.7369 24.4741 66.8491 23.4273 68.1372 23.4273C69.4263 23.4273 70.5376 24.4741 70.5376 26.0046C70.5376 27.5189 69.4263 28.5822 68.1372 28.5822ZM68.1372 21.7515C65.7853 21.7515 63.8685 23.5397 63.8685 26.0046C63.8685 28.4534 65.7853 30.2576 68.1372 30.2576C70.49 30.2576 72.4067 28.4534 72.4067 26.0046C72.4067 23.5397 70.49 21.7515 68.1372 21.7515Z"
                  fill="white"
                />
                <path
                  d="M20.7169 19.4245L10.0713 30.724C10.0717 30.7263 10.0725 30.7283 10.0729 30.7307C10.3994 31.9577 11.5201 32.8612 12.8501 32.8612C13.3818 32.8612 13.881 32.7174 14.3091 32.4651L14.3431 32.4451L26.3267 25.5301L20.7169 19.4245Z"
                  fill="#EB3131"
                />
                <path
                  d="M31.4873 17.5006L31.4771 17.4937L26.3034 14.4944L20.4746 19.6811L26.3237 25.5294L31.4701 22.56C32.3723 22.0729 32.9848 21.1217 32.9848 20.0248C32.9848 18.9358 32.3806 17.9893 31.4873 17.5006Z"
                  fill="#F6B60B"
                />
                <path
                  d="M10.0698 9.27759C10.0058 9.51358 9.97217 9.76078 9.97217 10.0175V29.9848C9.97217 30.2411 10.0054 30.4891 10.0702 30.7243L21.0833 19.7134L10.0698 9.27759Z"
                  fill="#5778C5"
                />
                <path
                  d="M20.7954 20.0011L26.3059 14.4922L14.3358 7.55211C13.9007 7.29151 13.3929 7.14111 12.8496 7.14111C11.5195 7.14111 10.3973 8.04622 10.0707 9.27465C10.0703 9.27585 10.0703 9.27668 10.0703 9.27773L20.7954 20.0011Z"
                  fill="#3BAD49"
                />
                <path
                  d="M47.3952 9.78163H44.4781V10.5035H46.6641C46.6047 11.0926 46.3703 11.5551 45.975 11.891C45.5797 12.227 45.075 12.3957 44.4781 12.3957C43.8234 12.3957 43.2687 12.1676 42.8142 11.7145C42.3688 11.252 42.1423 10.6801 42.1423 9.99109C42.1423 9.30211 42.3688 8.73019 42.8142 8.26773C43.2687 7.81464 43.8234 7.58805 44.4781 7.58805C44.8141 7.58805 45.1344 7.64585 45.4281 7.77245C45.7219 7.89894 45.9578 8.07554 46.1422 8.30214L46.6968 7.74745C46.4452 7.46146 46.1266 7.24275 45.7311 7.08336C45.3358 6.92397 44.9234 6.84747 44.478 6.84747C43.6047 6.84747 42.8641 7.15056 42.2594 7.75527C41.6547 8.36146 41.3516 9.10835 41.3516 9.99111C41.3516 10.8739 41.6547 11.6224 42.2594 12.2271C42.8641 12.8317 43.6047 13.1349 44.478 13.1349C45.3952 13.1349 46.1265 12.8411 46.689 12.2442C47.1843 11.7474 47.4374 11.0755 47.4374 10.2349C47.4374 10.0927 47.4202 9.94102 47.3952 9.78163ZM48.5253 6.98171V13.0004H52.0393V12.2613H49.2988V10.352H51.7706V9.63016H49.2988V7.72237H52.0393V6.98169L48.5253 6.98171ZM56.9667 7.7224V6.98171H52.8308V7.7224H54.512V13.0004H55.2854V7.7224H56.9667ZM60.7111 6.98171H59.9376V13.0004H60.7111V6.98171ZM65.816 7.7224V6.98171H61.6802V7.7224H63.3613V13.0004H64.1347V7.7224H65.816ZM73.6206 7.76459C73.0237 7.15051 72.2925 6.84741 71.419 6.84741C70.5441 6.84741 69.8129 7.1505 69.216 7.75522C68.6191 8.35211 68.3254 9.1005 68.3254 9.99106C68.3254 10.8816 68.6191 11.6301 69.216 12.227C69.8128 12.8316 70.5441 13.1349 71.419 13.1349C72.2846 13.1349 73.0236 12.8317 73.6206 12.227C74.2175 11.6302 74.5111 10.8817 74.5111 9.99106C74.5111 9.1083 74.2174 8.36137 73.6206 7.76459ZM69.7707 8.26768C70.216 7.81459 70.7628 7.588 71.419 7.588C72.0737 7.588 72.6206 7.8146 73.0581 8.26768C73.5034 8.71297 73.7221 9.29414 73.7221 9.99104C73.7221 10.6895 73.5034 11.2691 73.0581 11.7145C72.6206 12.1676 72.0737 12.3957 71.419 12.3957C70.7628 12.3957 70.2159 12.1676 69.7707 11.7145C69.3347 11.2598 69.116 10.6895 69.116 9.99104C69.116 9.29415 69.3347 8.72233 69.7707 8.26768ZM76.3486 9.25206L76.3159 8.09106H76.3486L79.408 13.0004H80.2157V6.98165H79.4423V10.5034L79.4751 11.6645H79.4423L76.5174 6.98165H75.5752V13.0004H76.3486V9.25206Z"
                  fill="white"
                  stroke="white"
                  stroke-width="0.26666"
                  stroke-miterlimit="10"
                />
              </svg>
            </a>
          )}
        </div>
      )}
    </>
  );
}