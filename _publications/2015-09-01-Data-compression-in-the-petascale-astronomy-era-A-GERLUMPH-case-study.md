---
title: "Data compression in the petascale astronomy era: A GERLUMPH case study"
collection: publications
permalink: /publication/2015-09-01-Data-compression-in-the-petascale-astronomy-era-A-GERLUMPH-case-study
excerpt: ''
date: 2015-09-01
venue: 'Astronomy and Computing'
paperurl: 'https://www.sciencedirect.com/science/article/pii/S2213133715000578'
---
As the volume of data grows, astronomers are increasingly faced with choices on what data to keep-and what to throw away. Recent work evaluating the JPEG2000 (ISO/IEC 15444) standards as a future data format standard in astronomy has shown promising results on observational data. However, there is still a need to evaluate its potential on other type of astronomical data, such as from numerical simulations. GERLUMPH (the GPU-Enabled High Resolution cosmological MicroLensing parameter survey) represents an example of a data intensive project in theoretical astrophysics. In the next phase of processing, the ≈ 27 terabyte GERLUMPH dataset is set to grow by a factor of 100-well beyond the current storage capabilities of the supercomputing facility on which it resides. In order to minimize bandwidth usage, file transfer time, and storage space, this work evaluates several data compression techniques. Specifically, we investigate off-the-shelf and custom lossless compression algorithms as well as the lossy JPEG2000 compression format. Results of lossless compression algorithms on GERLUMPH data products show small compression ratios (1.35:1 to 4.69:1 of input file size) varying with the nature of the input data. Our results suggests that JPEG2000 could be suitable for other numerical datasets stored as gridded data or volumetric data. When approaching lossy data compression, one should keep in mind the intended purposes of the data to be compressed, and evaluate the effect of the loss on future analysis. In our case study, lossy compression and a high compression ratio do not significantly compromise the intended use of the data for constraining quasar source profiles from cosmological microlensing.

[Download paper here](https://www.sciencedirect.com/science/article/pii/S2213133715000578)

Recommended citation: Vohl, D., Fluke, C. J., & Vernardos, G. (2015). Data compression in the petascale astronomy era: A GERLUMPH case study. <i>Astronomy and Computing</i>, 12, 200-211.