<head>
  <link
    href="https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="styles.css" />
  <!--<script src="https://aframe.io/releases/0.8.0/aframe.min.js"></script>-->
  <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
  <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>
</head>

<body>
  <div class="container">
    <!-- Scanning animation when the marker are not visible -->

    <div class="arjs-loader">
      <div class="arjs"></div>
      <div class="arjs-txt">Loading, please wait...</div>
    </div>

    <div id="scannerContainer" class="spinnerScanning">
      <label>Scanning</label>
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
    </div>

    <div id="imgContainer" class="spinnerScanning">
      <img src="./model.jpeg" height="auto" width="200" />
    </div>
  </div>

  <!-- Normal Modal a-scene -->

  <!-- <a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false;
  detectionMode: mono_and_matrix; matrixCodeType: 3x3 renderer='antialias: true
  renderer='logarithmicDepthBuffer: true;' shadow="type: pcfsoft" > -->

  <!-- Draco Modal a-scene -->

  <a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false;
  detectionMode: mono_and_matrix; matrixCodeType: 3x3 renderer='antialias: true
  renderer='logarithmicDepthBuffer: true;' shadow="type: pcfsoft"
  gltf-model="dracoDecoderPath: https://cors-anywhere.herokuapp.com/https://www.gstatic.com/draco/v1/decoders/"> ​

  <a-nft
    type="nft"
    url="https://arjs-cors-proxy.herokuapp.com/https://raw.githubusercontent.com/shubhamraghav1/web/aimg/aimg/aimg"
    smooth="true"
    smoothCount="10"
    smoothTolerance="0.01"
    smoothThreshold="5"
    position="0 0 0"
  >
    <!--dracomodel-->
    <a-entity
      gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githubusercontent.com/shubhamraghav1/web/master/2bhkfullDraco.gltf"
      scale="60 60 60"
      position="-100 0 400"
    >
    </a-entity>
  </a-nft>
  ​
  <!-- Normal  Model -->
  ​
  <!-- <a-nft
    type="nft"
    url="https://arjs-cors-proxy.herokuapp.com/https://raw.githubusercontent.com/shubhamraghav1/web/aimg/aimg/aimg"
    smooth="true"
    smoothCount="10"
    smoothTolerance="0.01"
    smoothThreshold="5"
    position="0 0 0"
  >
    <a-entity
      gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githubusercontent.com/shubhamraghav1/web/master/2bhk%20layout.gltf"
      scale="60 60 60"
      position="-100 0 400"
    >
      <a-entity
        gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githubusercontent.com/shubhamraghav1/web/master/2bhk%20bath.gltf"
        scale="1 1 1"
        position="0 0 0"
      >
      </a-entity>

      <a-entity
        gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githubusercontent.com/shubhamraghav1/web/master/2bhk%20table.gltf"
        scale="1 1 1"
        position="0 0 0"
      >
      </a-entity>

      <a-entity
        gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githubusercontent.com/shubhamraghav1/web/master/2bhk%20sofa.gltf"
        scale="1 1 1"
        position="0 0 0"
      >
      </a-entity>

      <a-entity
        gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githubusercontent.com/shubhamraghav1/web/master/2bhk%20bed.gltf"
        scale="1 1 1"
        position="0 0 0"
      >
      </a-entity>
    </a-entity>
  </a-nft>

  <a-entity camera camera="far:100; near:0.1"></a-entity> -->

  <script type="text/javascript">
    const sceneEl = document.querySelector("a-scene");
    sceneEl.addEventListener("loaded", () => {
      sceneEl.camera = new THREE.PerspectiveCamera();
    });

    let nftElem = document.querySelector("a-nft");

    nftElem.addEventListener("markerFound", (e) => {
      document.getElementById("scannerContainer").style.display = "none";
      document.getElementById("imgContainer").style.display = "none";
      console.log("found");
    });

    nftElem.addEventListener("markerLost", (e) => {
      document.getElementById("scannerContainer").style.display = "";
      document.getElementById("imgContainer").style.display = "";
      console.log("lost");
    });
  </script>
</body>