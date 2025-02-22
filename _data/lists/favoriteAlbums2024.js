export default {
  title: "Favorite Albums of 2024",
  description: [
    "This is a line of the description. **whoa**",
    "This second line contains a [link](www.google.com). Sweet"
  ],
  type: {
    primary: "album",
    secondary: "artist"
  },
  items: [
    {
      primary: "Wheels Within Wheels",
      secondary: "Meer",
      additionalText: `
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata`
    },
    {
      primary: "Fym",
      secondary: "Azure",
      additionalText: `
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
        
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
        
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Ut wisi enim ad minim
      `
    }
  ],
  supplements: [
    {
      name: "Honorable Mentions",
      description: "Albums that just didn't make the cut.",
      itemMarker: '☀️',
      items: [
        {
          primary: "Pigs ",
          secondary: "The Pig Band",
          additionalText: `Rockin' pigs rocked too hard`
        },
        {
          primary: "Hogs",
          secondary: "Hogg Hog and the Hogs",
          additionalText: `Too much snorting`
        }
      ]
    },
    {
      name: "Honorable Misses",
      description: "Albums that didn't make the cut for bad reasons.",
      itemMarker: '⛔',
      items: [
        {
          primary: "Burger King At Twilight",
          secondary: "The Fast Foodies",
          additionalText: `I don't get it`
        },
        {
          primary: "Sins of the Fathers",
          secondary: "The Mothers",
          additionalText: `Just a lot of blame game`
        }
      ]
    }
  ]
};
