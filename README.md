# Hackdavis2021 Wildfires Predictions - Flamecast

## Inspiration

Climate change is one of the most concerning problems around the world these years. It causes wildfires which will put human life, properties, and wild resources in danger. There are more than two thousand wildfires per year just in California. So, we have already had a huge amount of data records on it. Big data is extremely helpful in making machine learning models and making predictions about future events. As a result, based on the weather data from NASA and the wildfire data from the Forest Service Research Data Archive, we started this project predicting the wildfire patterns to give local governments and people forecast about the wildfire to help them make better decisions. By this project, we can better address the UN SDGs in climate action(#13) and life on land(#15)

## What it does

Flamecast is a machine-learning powered tool for local governments to use for a 14-day prediction of the probability of wildfires. It works by using weather data over 14 days before targeted data like wind, temperature, humidity, etc. to identify what is the probability of the fire.

## How we built it
### Front-end
As the UI designer, I first started with wireframing after determining what our web app needed. My wireframe is already colored because our team decided early that it would be incredibly useful to have colors for each day to signify the severity of the fire risk, as it’s a great way to quickly scan the data. From there, I created the mockup and chose a clean, minimalist style that focuses on the most important part of the site, the prediction model. After the mockup was finished, Shalini developed the site with HTML, CSS, and Javascript.

### Back-end
To build the network we started with gathering the data on wildfires and weather conditions. To begin, we decided to focus on CA. We gathered climate data from NASA Power dataset and used Kaggle 1.88 million US Wildfires dataset. After gathering all the data, we subset the wildfires and weather data by month and year and matched the data. We assigned the weather data to wildfires by location and date and the labeled full weather data to indicate if certain weather data resulted in ‘Fire’ or ‘Not a fire’. We also used fire size as another label. This data processing was the most complicated and time-consuming part of the project, as there was a huge number of observations and every data processing step would take a significant amount of time.

After completing the data processing, we moved on to creating the model. To do that, we needed to create time series of data for 14 days before “fire” or “not a fire”. We chose 8 variables that included max and min temperature, humidity, precipitation, wind speed, surface pressure, etc. After that, we moved on to the model. Due to time constraints we were not able to fully polish the model, but we achieved a pretty low loss as well as an adequate sample prediction for 5/14/2019 and 14 days onward.

## Challenges we ran into
The main challenges for the network development were editing the data and matching wildfires and weather data sets. We started with a weather dataset that contained over 500K observations. The scripts would run very slowly and if there was a mistake, we would have to start it all over again. However, being creative on how to match the data and connecting two absolutely different datasets, meeting 5+ mentors, and working on these problems was an amazing learning experience.

The main challenge for a UI designer was in creating an interface that was visually appealing, as our UI designer someone that leans more towards user experience instead of UI. Because the style of the site is minimalist, I struggled with issues like spacing and figuring out which elements to color to make them stand out.

Another challenge that our team encountered was working over 3 different time zones (PST, EST, IST). This meant we needed to be very efficient about our communication and make sure that we all know what to do at all times.

## Accomplishments that we're proud of
We are proud that despite all the challenges and being in different time zones, we were able to work as a team and produce an MVP in such a short time

## What we learned
We enhanced our knowledge of processing data using Pandas and building neural networks, including working with time series data and learning from the experience of others (like this article was super useful). We learned how to convert a mockup into an actionable frontend. Finally, we all learned how to do a project from scratch to an MVP in less than 36 hours.

## What's next for Flamecast
Other features that we would want to add include connecting our project to weather forecasting APIs, so that we can forecast based on future data and not historical data, expanding to other locations, predicting other wildfire features like severity, etc.
