---
layout: post
title: Sparse notes and blurry pictures on NVIDIA Deep Learning Roadshow, Downunder Edition (Melbourne)
---

[Link to the event description](http://dlroadshow-melbourne.eventbrite.com/)

# Intro to Deep learning (Ryan Olson, NVIDIA)

⋅⋅⋅Some papers of interest: 

⋅⋅⋅['Fast training of convolutional networks through ffts', 2013](http://arxiv.org/abs/1312.5851)

⋅⋅⋅[the unreasonable effectiveness of recurrent neural networks](http://karpathy.github.io/2015/05/21/rnn-effectiveness/) (blog post)

⋅⋅⋅[Han et al. learning both weights and connections for efficient neural networks, nips, 2015](http://arxiv.org/abs/1506.02626)

⋅⋅⋅Some libraries:
⋅⋅⋅ ⋅⋅⋅cuDNN, [NCCL](https://github.com/NVIDIA/nccl), cuSPARSE, cuBLAS, cuFFT...

⋅⋅⋅Post-presentation thought: A bit too high level but a good overview of what can be used through NVIDIA for deep learning.

⋅⋅⋅![alt text](https://macrocosme.github.io/images/IMG_9175.jpg "AI timeline")
⋅⋅⋅![alt text](https://macrocosme.github.io/images/IMG_9178.jpg "What you can get/use")


# NVIDIA DGX-1, PASCAL AND NVLINK (Pradeep Gupta, NVIDIA)

⋅⋅⋅Thought: Seems to be targeted to HPC hardware management people. 

⋅⋅⋅(PCI --> 16GB/s) : NVLink --> 4 links @ 20GB/s (GPU to GPU, GPU to CPU, ...) 
⋅⋅⋅CoWoS HBM2 (2.5D memory)

⋅⋅⋅[Pascal Architecture](https://devblogs.nvidia.com/parallelforall/inside-pascal/):
 
⋅⋅⋅TESLA P100:
⋅⋅* 2840 CUDA cores
⋅⋅* FP64,32,16
⋅⋅* Atomics over NVLINK
⋅⋅* 2X GPUDIRECT RDMA bandwidth (infini band from gpu to gpu)

..SM: Streaming MultiProcessor --> useful when need lots of local reads and writes

..Double precision/single precision/half precision available.


..NGX-1: ~129K USD
..[compute.nvidia.com](compute.nvidia.com): containers, scheduling, cluster management, updates & security

..NVIDIA is hiring: talk to [Mike](https://www.linkedin.com/in/mikepcw).


..NGX-1 Topology: 
..![alt text](https://macrocosme.github.io/images/IMG_9182.jpg "DGX-1 system topology")


..From general discussion :
..[Google Tensor Processing Units](https://cloudplatform.googleblog.com/2016/05/Google-supercharges-machine-learning-tasks-with-custom-chip.html)


# Robotic and Bionic Vision: applications of GPU Computing (Prof. Tom Drummond, Monash)

..Main topics discussed:
..* Bionic vision chip developed at Monash
..* SLAM (Simultaneous localization and mapping) - brings back some memories from Philippe Giguère's mobile robotics course!
..* Semantic Segmentation (classify objects)
... ..* Semantic SLAM: merge both topics
... ..* 3D shape gives cues as to what something is
... ..* Semantics gives cues as to 3D shape

..SLAM : front end ( image processing/keypoint detection and correspondence )
..       back end ( modelling state, camera trajectory, ... )
       
..Semantic SLAM : adds middle end (state representation with modelling of objects)
                    back end: sparse matrix solver
         
..![alt text](https://macrocosme.github.io/images/IMG_9184.jpg "Semantic SLAM")

..data expansion: key step in deep learning when you don't have that big of a training set... 


# [Hands on lab (DIGITS)](https://nvlabs.qwiklab.com/focuses/769) (Jon Barker, NVIDIA)

..DIGITS offers multiple DNN algorithms taken from the industry (Caffe and Torch) 

..[yolo](http://pjreddie.com/darknet/yolo/): you only look once


# Recurrent Neural Networks (Jon Barker, NVIDIA) 

..Sequential classification and labeling

..RNNs use their hidden states work as memory on previous inputs
 
..Use case example:
..*Speach recognition
  
..Classical vs NN
..Natural language processing
..paper: [WSJ-20K, Kaldi](http://homepages.inf.ed.ac.uk/aghoshal/pubs/asru11-kaldi.pdf)
 
..*word2vec (google)
..*[Tensor Flow](https://www.tensorflow.org/versions/r0.9/tutorials/word2vec/index.html)

..RNN is a new feature in cuDNN v5.

..Some a few more blurry slides on RNN I thought were interesting at the time:
..![alt text](https://macrocosme.github.io/images/IMG_9185.jpg "RNN 1")
..![alt text](https://macrocosme.github.io/images/IMG_9186.jpg "RNN 2")
..![alt text](https://macrocosme.github.io/images/IMG_9187.jpg "RNN 3")