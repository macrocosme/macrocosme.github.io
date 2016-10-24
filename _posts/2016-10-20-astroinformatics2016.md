---
layout: post
title: ADASS XXVI conference - Day 1 
---

Personal notes on speakers' presentations ([conference program](http://www.adass2016.inaf.it/index.php/program)):

**Christophe Ariset**
Challenges with ESA archive: semi open access (open query, login to download) vs full open access (no login)
Offer both, open access by default, where you can login to access extra functionalities like aynchronous query, VO workspace... 
Open access can confuse statistics on users, but not necessarily non-usable. e.g. use user IP address... 

sky.esa.int


**Sara Nieto (ESA center)** 
Euclid: 1PB image: 10-100 TB
VOSpace Sharing Capability (vospace.esac.esa.int)


**Stephan Witz (NRAO) - Towards a self-healing archive**
Ways to keep metadata functional
'If early database engineers made mistakes, we will likely make mistakes too'

Self-healing through :
Use scriptable workflow w/ cluster to retrieve projects from archive
Compare old metadata with new (diff)

**W. Landry (IPAC) - Instantaneous Archives**
What is fast enough to complete a query? 200ms?
Sky tiled using Hierarchical Triangular Mesh (comparable results than q3c)/ healpix slightly faster than q3c.
Moved from Apache to Multi-threaded server. Now ~73ms.  

httpperf test for query speed.

jobs.caltech.edu/postings/5580

**Sarah Graves - The JCMT SCUBA-2 Legacy Release: Unexpected Benefits and Lessons Learned**
James Clerk Maxwell Telescope 
Release 2850 observations

**J. Salgado - ESASky: A simple/performant interface on massive astronomical data**
Overview of what is available through ESA sky (see above). 

**Xiuqin Wu - Next generation Firefly for web application**
I should have a look into EcmaScript 6 / React / Redux. 
 
 
**P. Fernique - Long-term management of 1000s of All-Sky reference data sets using the HiPS network**
Long term data format choice and reader should be simply (re)written (avoid compression, ...). 
Should not rely on people, database, etc. ASCII header. 
 
 For sky survey, you only need to keep track of a pixel on the sky/sphere. 
 HiPS --> HEALPix is only a file system (subdirectories). 
 
 HiPS : 300+ HiPS for 100 TB of data
 Clients: aladin, MIZAR, STScI portal, openWWT... 
 IVOA standard : ivoa.net/documents/HIPS/20160623
 Works with cubes as well -- may need some extra development? 
 
 **C. Loup - What is SIMBAD, and what is it not?**
 
 
 
