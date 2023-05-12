# Plan 

- [x] v1.3 - Individual page stylings and reactive styling for mobile
- [x] v1.4 - Finalise Icons and add Images with image gallery
  - [x] v1.4.0 - Update photo test add redirect to image bar 
  - [ ] v1.4.1 - Add firebase storage to add and read images 
    - [ ] Clean up code 
    - [ ] Clean up firebase storage paths 
    - [ ] Add images 
    - [ ] Render chosen images on certain pages 


## Remaining Work 
- [ ] v1.5 - Copy and content 
  - v1.5.1 - Lanuguage Packs 
  - v1.5.2 - Add Content 
- [ ] v1.6 - Complete and Clean up Firebase linkup
  - Collections:  Pictures / reviews / content / contact form
    - each to have add, get, update endpoint added




### Stretch Goals 
- [ ] v2.0 - Add admin page to:
  - v2.1.0 - Add ability to add images to firebase via url 
    - look into file storage
  - v2.2.0 - Get Images from firebase and populate certain pages 
  - v2.3.0 - Add ability to change content  
  - v2.4.0 - Add password protection to admin page 
  - v2.5.0 - Add reviews component 
---

###  NOTES 
- react library based navbar that is horizontally styled 
- services of navbar to be a dropdown of other services
- icons to be passed down to service pages 
- icon or images on main page 
- create an image gallery
- review page 
  - links to facebook and google reviews
---
## Done 
- [x] v1.0.1 - Initial Vercel deployment - https://bromsgrove-electricals-webapp.vercel.app
- [x] v1.0.2 - fixes to initial deployment - fix NavBar linking
- [x] v1.0.2b - Added CI via vercel for both staging and production environemnts 
  - any pushes to main branch will automatically push to vercel productiomn site, so have added tsrict rule on merging from feature branches. 
- [x] v1.1 - initialise final chosen react library and implement components 
  ~~- nav bar / menu~~ 
    - [x] v1.1.1 - Contact us form 
    - [x] v1.1.2 - Services Pages
    - [x] v1.1.3 - Icon library and usages
- [x] v1.2 - Over-all site theme / styling 
  - [x] Add theme provider from MUI
  - [x] use mui color tool to develop out the theme.tsx file for use app wide https://mui.com/material-ui/customization/color/
  - [x] 30th april - fixed contact us form and all pages styling
  - [x] 1.2.4 - Implement theme provider across all pages / componenents 
   - also added changes to contact form for better styling and form control
  - [x] 1.2.5 - Initial Styling throughout app using theme provider
  - [x] 1.2.6 - App Wide Theme Implementation



--- Deprecated BackEnd --- 
 - this is already partially done wuth backend loacted here https://github.com/craig2812/WebAppBackEnd
 - this requires hosting externally however