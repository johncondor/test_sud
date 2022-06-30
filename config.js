const config = {
    style: "mapbox://styles/mapbox/light-v10",
    accessToken:
      "pk.eyJ1Ijoic3RpbnNvbi1nZW9ncmFwaGl4IiwiYSI6ImNrdml1a20xc2NvY2Uyd3E2ejllY3k3ZGEifQ.cd9Z7ukoclCnaofc4-y4qA",
    CSV: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT1bc7mkOMdxKO0NefquVbZ_UK7PMB66qziUCSaaWkMML4yf_Q4QGCDmo7zX31_oi5UMrtfBHRBd2p5/pub?gid=0&single=true&output=csv',
    center: [32.56,15.500556],
    zoom: 5,
    title: "Sudan Protest Tracker",
    description:
      "This website reports the date, relative size, and reaction to anti-coup protests in Sudan.",
    sideBarInfo: ["City", "Date", "Action_type"],
    popupInfo: ["City"],
    filters: [
      {
        type: "dropdown",
        title: "City",
        columnHeader: "City",
        listItems: [
            "Aba Island","Abri","Al Agda Almagharba","Al Daein","Al Doweim","Al Fashir","Al Foula","Al Gabalia","Al Geteina","Al Hasahisa","Al Manaqil","al-bargeeg","Al-Butana University","Al-Damar","Al-Gadarif","Al-Geneina","Argo","Atbara","babanusa","Bahri","Barah","Damazin","Dinder","Dongola","El-Obeid","Er Roseires","Ghubaysh","Halfa","Kabkabya","Kadugli","Karima","Kas","Kassala","Kerma","Khartoum","Khashm Al-Girba","Kinana","Kosti","Kosti","Madani","Marawi","Muglad","New Halfa","Nuhood","Nyala","Old Umm Talha","Omdurman","Port Sudan","Rabak","Rufaa City","Shandi","Sinja","Sinnar","Tandalti","Umm Ruwaba","Yabus","Zalingy"
        ],
      },
      {
        type: "dropdown",
        title: "Dates of Protest: ",
        columnHeader: "Dates",
        listItems: [
            "December 6, 2021","December 13, 2021","December 19, 2021","November 21, 2021","November 21, 1021","November 30, 2021","December 25, 2021","November 17, 2021","December 30, 2021","November 13, 2021","October 30, 2021","January 2, 2022","January 4, 2022","January 6, 2022","January 9, 2022","November 25, 2021","January 13, 2022","January 17, 2022","January 24, 2022","January 30, 2022","February 7, 2022","February 14, 2022","February 20, 2022","February 21, 2022","February 24, 2022","February 26, 2022","February 28, 2022","March 3, 2022","March 8, 2022","March 17, 2022","March 21, 2022","March 24, 2022","March 31, 2022","March 28, 2022","April 6, 2022","April 11, 2022","April 17, 2022","April 30, 2022","May 5, 2022","May 9, 2022","May 12, 2022","May 19, 2022","May 21, 2022","May 23, 2022","May 26, 2022","May 28, 2022","June 3, 2022","June 11, 2022","June 16, 2022"
        ],
      },
      {
        type: "dropdown",
        title: "Reports of Violence",
        columnHeader: "Violence_rep",
        listItems: ["Yes", "No"]
      },
      
    ],
  };