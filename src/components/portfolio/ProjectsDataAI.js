export const projects = [
  {
    title: "Various applications - Autoencoders",
    description: ` This project features autoencoders in machine learning with MNIST and Oxford-IIIT
     Pet datasets. The MNIST section focuses on building a fully connected autoencoder for digit 
     reconstruction and latent space visualization, including denoising and linear interpolation
      between data points. The Oxford-IIIT Pet segment introduces convolutional autoencoders for 
      image compression, denoising, and segmentation tasks.
    `,
    "prog_lang": "Python",
    "category": "Python",
    "technologies": "PyTorch",
    "links": [
      { "name": "Source Code", "href": "https://github.com/fernanda-palacios/ai-code-notebooks/blob/main/h_autoencoders.ipynb" }
    ],
  },
  {
    title: "Facial recognition - Transfer Learning",
    description: `This project uses the CelebA dataset and the ResNet18 base model for transfer
     learning, modifying its final layer to suit the specific classification task. The project also
      compares the performance of the transfer learning approach against training a model from 
      scratch, showcasing the effectiveness and efficiency of leveraging pre-trained models in 
      deep learning tasks. 
    `,
    "prog_lang": "Python",
    "category": "Python",
    "technologies": "PyTorch",
    "links": [
      { "name": "Source Code", "href": "https://github.com/fernanda-palacios/ai-code-notebooks/blob/main/g_transfer_learning.ipynb" }
    ],
  },
  {
    title: "Digit classification - CNNs",
    description: `This project presents a Convolutional Neural Network (CNN) designed for
     digit classification using the MNIST dataset. The training set consists of 60k images,
      and the testing set of 10k images. The model includes convolutional, pooling, and linear
       layers and achieves an accuracy of 95.92% in digit classification.
    `,
    "prog_lang": "Python",
    "category": "Python",
    "technologies": "PyTorch",
    "links": [
      { "name": "Source Code", "href": "https://github.com/fernanda-palacios/ai-code-notebooks/blob/main/f_convolutional_neural_networks.ipynb" }
    ],
  }, {
    title: "FunPuzz - Constraint Satisfaction Problems",
    description: `A project on Constraint Satisfaction Problems (CSP’s) in AI which implements two 
  constraint propagators (Forward Checking and Generalized Arc Consistency), as well as models
   the FunPuzz game as a CSP using binary and non-binary constraints to solve it and compare the
    performance of these solutions.`,
    "prog_lang": "Python",
    onRequest: true,
    "category": "Python",
    "links": [
      { "name": "Demo", "href": "https://drive.google.com/file/d/1u_Cpl__ZhmgisjzeEU-Tm7Zyx1gJ4P0-/view?usp=sharing" }
    ],
  },
  {
    title: "Othello Player - Game Tree Search",
    description: `An AI agent player for the game Othello. It uses the Minimax algorithm to play,
     along with Alpha-Beta Pruning, a depth limit for the search for a faster search, state caching
      and a node ordering heuristic. It can be quite hard to play against as shown in the demo!`,
    onRequest: true,
    "category": "Python",
    "links": [
      { "name": "Demo", "href": "https://drive.google.com/file/d/1EQjuErBJYFETZL8SZ-EJzEY4JXN0FZ46/view?usp=sharing" }
    ],
  }
]