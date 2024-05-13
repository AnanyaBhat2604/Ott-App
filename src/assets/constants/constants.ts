export const constants = {
  SEARCH: "search",
  TRYFORFREE: "tryforfree",
  EN: "EN",
  PROFILE: "profile",
  GET: "GET",
};

export const profileOptions = {
  children: [
    {
      title: "Sign In",
    },
    {
      title: "Help",
    },
    {
      title: "Watch Anywhere",
    },
  ],
};

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
