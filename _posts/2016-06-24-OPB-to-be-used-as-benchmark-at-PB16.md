---
layout: post
title: OPB files from SyncBits paper to be used as benchmark at PB16!
---

We have been contacted by [Olivier Roussel](http://www.cril.univ-artois.fr/~roussel) to use our OPB files used in our
2012 paper [Finding Synchronization Codes to Boost Compression by Substring Enumeration](http://arxiv.org/abs/1605.08102).

![alt text](https://macrocosme.github.io/images/paper_sync.png "Dany Vohl, Claude-Guy Quimper, and Danny Dubé. Finding Synchronization Codes to Boost Compression by Substring Enumeration. In Proceedings of the Eleventh International Workshop on Constraint Modelling and Reformulation (ModRef 2012), held at the 18th International Conference on the Principles and Practice of Constraint Programming (CP 12), 16 pages, 2012.")
 
These files are implementing our pseudo-boolean constraint model that computes the shortest synchronization codes, 
i.e. those that add the fewest synchronization bits to the original data. As their name indicates, these codes are 
usually used to help programs stay synchronized, for example when sending data over the internet or when reading information
on your hard-drive. My supervisor at the time, Danny Dubé, and his student Vincent Beaudoin invented a compression scheme 
about a year prior to my time at ULaval called [compression by substring enumaration (CSE)](http://www2.ift.ulaval.ca/~dadub100/files/DCC10.pdf).
As this technique is bit oriented, whereas most benchmark are byte oriented, it suffers from a problem refered 
to as phase unawareness. In short, the compressor is not aware of byte boundaries. By adding synchronization codes to 
the data, we can help the compressor keeping track of binary words, and helps compressing data further. 
 
 For more info about CSE, [have a look here](https://scholar.google.com.au/scholar?hl=en&q=compression+by+substring+enumeration&btnG=&as_sdt=1%2C5&as_sdtp=).
 
All of this to say that finding synchronization codes with the constraint satisfaction and pseudo-boolean models 
we presented is time consuming when looking for n-reliable codes, and for longer and longer codes (as shown below 
for the pseudo-boolean model). For exemple, to prove that there was no possible code satisfying the constraint 
32 original bits, 13 synchronization bits, and that is 32-bit reliable (how many bits you need to read before 
knowing at which bit phase you are, took about 6 days on my previous laptop with MiniSat+. 

Hence, the pseudo-boolean solvers at PB16 will (likely) be tested to see how fast they can find answers using 
[the files I generated back then](https://github.com/macrocosme/finding_synchronization_codes).

![alt text](https://macrocosme.github.io/images/fig1_sync.png "Fig. 1 of Dany Vohl, Claude-Guy Quimper, and Danny Dubé. Finding Synchronization Codes to Boost Compression by Substring Enumeration. In Proceedings of the Eleventh International Workshop on Constraint Modelling and Reformulation (ModRef 2012), held at the 18th International Conference on the Principles and Practice of Constraint Programming (CP 12), 16 pages, 2012.")

I'm looking forward to see the results!

p.s. I believe Danny has an algorithm to find them faster than with this model, but I've never seen it!