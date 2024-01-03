# Changelog

## [2.0.0](https://github.com/codesweetly/react-image-grid-gallery/compare/v1.0.3...v2.0.0) (2024-01-03)


### ⚠ BREAKING CHANGES

* Rename imagesArray prop to imagesInfoArray
* Rename imgArray prop to imagesArray
* Users must now use named importation to add the package to their apps.

Named importation provides better compatibility with node and babel-like tools.

Ref: https://esbuild.github.io/content-types/#default-interop

### 🧱 Dependency

* Bump @types/react ([2515713](https://github.com/codesweetly/react-image-grid-gallery/commit/2515713d69e221e4c6fded51badffa7229dc0d59))
* Bump packages ([3340792](https://github.com/codesweetly/react-image-grid-gallery/commit/3340792c20c6ad5128795885aaa93da57cdb2d91))
* Configure script for building es modules and commonjs compilations ([14a6251](https://github.com/codesweetly/react-image-grid-gallery/commit/14a62518ba0331b7068f34e558363d120be79a1a))
* Configure script for building es modules compilations ([390e63a](https://github.com/codesweetly/react-image-grid-gallery/commit/390e63adf84d6f48379332851ff749faeea05336))
* Configure typescript as the package's compiler ([3738a8e](https://github.com/codesweetly/react-image-grid-gallery/commit/3738a8e990bf118f7f3c8f68690186acf5aa168b))
* Delete the copy-files script ([6da1df0](https://github.com/codesweetly/react-image-grid-gallery/commit/6da1df08897eade35b5d988055d774855509cac0))
* Specify items typescript should compile ([280f7d1](https://github.com/codesweetly/react-image-grid-gallery/commit/280f7d13f289ab743a354944115dc2bf39e5450f))
* Uninstall babel packages ([f1f9e8f](https://github.com/codesweetly/react-image-grid-gallery/commit/f1f9e8fcbd7b986c72c1043a4b05e753ac96c0b6))


### 🏠 Chores

* Define package's entry point ([45f3c19](https://github.com/codesweetly/react-image-grid-gallery/commit/45f3c19c8c597d9d2f5fac8bc8494d606df330dd))
* Delete babel configuration ([846a6cf](https://github.com/codesweetly/react-image-grid-gallery/commit/846a6cf7ec34cd1e554fd0d2e42a26ed32513e50))
* Provide url and email for raising issues and reporting bugs ([7d0319c](https://github.com/codesweetly/react-image-grid-gallery/commit/7d0319c1ae47dda5b5e1e43a55bf42a33d3a5f8b))
* Specify additional ignore rules ([4659bde](https://github.com/codesweetly/react-image-grid-gallery/commit/4659bde774de21546d65e7c5dcef3c7ed8f8fe71))
* Specify files to publish to npm ([b05e3d1](https://github.com/codesweetly/react-image-grid-gallery/commit/b05e3d1a98083a8fa8ed71e4d29a89a33185f27a))
* Specify package's declaration file ([b8d634d](https://github.com/codesweetly/react-image-grid-gallery/commit/b8d634d753cfd1a570fb3d7e1368bfd8a152e38b))


### 📝 Documentation

* Add headers to installation section ([d0c444b](https://github.com/codesweetly/react-image-grid-gallery/commit/d0c444bcd76c7e2fa10148175e51ccc6fd9ef27e))
* Update readme ([1946f5c](https://github.com/codesweetly/react-image-grid-gallery/commit/1946f5c67d2f5004abe4b872d870c5aa16df5052))


### 🐛 Bug Fix

* Resolve crypto.randomUUID is not a function jest error ([d3196a2](https://github.com/codesweetly/react-image-grid-gallery/commit/d3196a22341580d4391c80363b8decdbd95f8495))


### 🔄️ Code Refactoring

* Add test section to changelog ([cc924ff](https://github.com/codesweetly/react-image-grid-gallery/commit/cc924ff00a8e874ec9ff6cb2dc107e38a87f3ee0))
* Change imagegallery's export mode from default to named exportation ([d38624c](https://github.com/codesweetly/react-image-grid-gallery/commit/d38624c59842a39b83579c8d7723e629af776e8b))
* Convert commitlint configuration file to typescript ([b4bbe51](https://github.com/codesweetly/react-image-grid-gallery/commit/b4bbe5119a282f21c7af05a67c5ccabc0f0e6453))
* Move css rulesets into imagegallerystyles file ([4529b1e](https://github.com/codesweetly/react-image-grid-gallery/commit/4529b1eba963c3827db876422e9756a75162e3c7))
* Move interface into types file ([24c2f9e](https://github.com/codesweetly/react-image-grid-gallery/commit/24c2f9ecc15f57c6e75d05af3928cb045ef9d188))
* Rename imagesArray prop to imagesInfoArray ([753fc2a](https://github.com/codesweetly/react-image-grid-gallery/commit/753fc2a7767b661003e4370e5adb6107b37d559d))
* Rename imgArray prop to imagesArray ([2b7f611](https://github.com/codesweetly/react-image-grid-gallery/commit/2b7f611ba0d97b1836576093a5945ff7d99bd66f))
* Rename imgElementArray to imageElementsArray ([a975321](https://github.com/codesweetly/react-image-grid-gallery/commit/a9753214965474878941dfe1d996b926b02e5b6f))
* Replace uniqid with crypto.randomuuid ([06bd0ee](https://github.com/codesweetly/react-image-grid-gallery/commit/06bd0eefbb27839b7536d087174a7a34314fdf12))
* Use release-it's default publish path ([2a5be4a](https://github.com/codesweetly/react-image-grid-gallery/commit/2a5be4a2a304d643873f1026f3be66f0fde1ba2a))


### 💅 Styling and Formatting

* Delete stylesheet ([f61ef5d](https://github.com/codesweetly/react-image-grid-gallery/commit/f61ef5dc238d5d799e2ef51d267748aa8e10624a))
* Move the gallery container's rulesets into the imagegallerystyles class ([db209e5](https://github.com/codesweetly/react-image-grid-gallery/commit/db209e5cb7f15e4c306c9d8ad359127ccd6f4043))
* Show figcaption on hover ([16b3708](https://github.com/codesweetly/react-image-grid-gallery/commit/16b370820a7e392f8471b4392538cf261e672708))
* Use inline css styling technique ([d2951ca](https://github.com/codesweetly/react-image-grid-gallery/commit/d2951cac95039bbf5d224d610a021dc1d553b7ee))


### 🧪 Code Testing

* Configure jest as the package's testing tool ([89fcdc3](https://github.com/codesweetly/react-image-grid-gallery/commit/89fcdc3cc08cc7442bb8f4becc8291812a3d0d8b))
* Confirm that the image gallery renders correctly ([671c90d](https://github.com/codesweetly/react-image-grid-gallery/commit/671c90d945ba9240d8064a54059283a961b5ad28))
* Convert jest configuration file to typescript ([3845d9c](https://github.com/codesweetly/react-image-grid-gallery/commit/3845d9c88908ac5835d43dd81242059c5ecc15d1))
* Rename imgArray prop to imagesArray ([3d5839d](https://github.com/codesweetly/react-image-grid-gallery/commit/3d5839d92a6a25b6ab44abe251243076af388382))

## [0.9.4](https://github.com/codesweetly/react-image-grid-gallery/compare/0.9.3...0.9.4) (2023-05-31)


### 🧱 Dependency

* Add prop-types to dependencies ([c9b2141](https://github.com/codesweetly/react-image-grid-gallery/commit/c9b214105aa0152b6dc369b481b72e2a90b73d39))

## [0.9.3](https://github.com/codesweetly/react-image-grid-gallery/compare/0.9.2...0.9.3) (2023-05-31)


### 🧱 Dependency

* Move fslightbox-react and uniqid to dependencies field ([eec267b](https://github.com/codesweetly/react-image-grid-gallery/commit/eec267bbfa56e645d9e8112636a4c0d43cdcfafb))

## [0.9.2](https://github.com/codesweetly/react-image-grid-gallery/compare/0.9.1...0.9.2) (2023-05-30)


### 💅 Styling and Formatting

* Change figcaption background's maximum opacity to 1 ([46c624f](https://github.com/codesweetly/react-image-grid-gallery/commit/46c624f8d7a61548562c09cd020a5f1ee8b5736c))
* Change padding-inline to padding ([74b638c](https://github.com/codesweetly/react-image-grid-gallery/commit/74b638cc8492dd75390c859501119e6668a5f38e))

## [0.9.1](https://github.com/codesweetly/react-image-grid-gallery/compare/0.9.0...0.9.1) (2023-05-30)


### 📝 Documentation

* Write about the 'columnWidth' and 'gapSize' props ([0637ae4](https://github.com/codesweetly/react-image-grid-gallery/commit/0637ae46d9103b0ccde9ac48189e0908e606be6c))

## [0.9.0](https://github.com/codesweetly/react-image-grid-gallery/compare/0.8.0...0.9.0) (2023-05-30)


### 🐛 Bug Fix

* Use github readme as homepage ([5cb07b4](https://github.com/codesweetly/react-image-grid-gallery/commit/5cb07b4b023d3663f2b318bbc7da858304a465a8))


### 💅 Styling and Formatting

* Use mansory grid layout format for the image gallery ([55697e3](https://github.com/codesweetly/react-image-grid-gallery/commit/55697e3f0b919178835406660811409e705e46a9))


### 🚀 New Feature

* Give users the option to specify gallery's gap size ([b42efe4](https://github.com/codesweetly/react-image-grid-gallery/commit/b42efe4744c307e1f24871d6b5919619a44d011a))
* Provide users the option to specify gallery's column width ([c54eaa4](https://github.com/codesweetly/react-image-grid-gallery/commit/c54eaa46e409cb6ca0e3ee00f949852a42bf2d9d))

## 0.8.0 (2023-05-29)


### 🚀 New Feature

* **ImageGallery:** Create ImageGallery component ([49c40a9](https://github.com/codesweetly/react-image-grid-gallery/commit/49c40a979383f3e381103490acb2c06a519f79b6))


### 🔄️ Code Refactoring

* Don't render <figcaption> if item.caption is undefined ([1c0c59e](https://github.com/codesweetly/react-image-grid-gallery/commit/1c0c59e3bbf061d5504365c3aa1017d05d073f13))
* Make caption optional ([c47d824](https://github.com/codesweetly/react-image-grid-gallery/commit/c47d824d475487e07b445f2a72641519f0649949))
* Rename 'ImgArryProps' to 'ImgArrayType' ([8062f6c](https://github.com/codesweetly/react-image-grid-gallery/commit/8062f6cb0933af5dd58ea3b710236e26dfc24e35))


### 💅 Styling and Formatting

* Add 'codesweetly-rigg' to class names ([4e12857](https://github.com/codesweetly/react-image-grid-gallery/commit/4e12857ca399d22a7005b1e9ef071dc41ef422dc))
* Add row-gap ([4a5b2d8](https://github.com/codesweetly/react-image-grid-gallery/commit/4a5b2d8e8e7e63fe65850b8366a128c07071b85a))
* Create ImageGallery's stylesheet ([70191bc](https://github.com/codesweetly/react-image-grid-gallery/commit/70191bcdf4bb8508227e89de3346556ac85fbec5))
* Define codesweetly-img's width ([ca01ba6](https://github.com/codesweetly/react-image-grid-gallery/commit/ca01ba6150a73b6860ac4e014e705e3694127c68))
* Delete 'data-theme=light' declaration ([d578205](https://github.com/codesweetly/react-image-grid-gallery/commit/d5782050bccf79d74e4217045eeb96935008985b))
* Delete the 'codesweetly-rigg-img' class ([c87e621](https://github.com/codesweetly/react-image-grid-gallery/commit/c87e62140526d38ff5217b90482e39f3e734a5da))


### 📝 Documentation

* Create README ([bc64b22](https://github.com/codesweetly/react-image-grid-gallery/commit/bc64b22ff4e2c4602f43ed430f6e8dc640888b50))


### 🏠 Chores

* Change version number to 0.0.0 ([24da08f](https://github.com/codesweetly/react-image-grid-gallery/commit/24da08fe65fbb0428913eba947ea979f6681fef1))
* **commitlint:** Install plugins to enforce Conventional Commits ([9170395](https://github.com/codesweetly/react-image-grid-gallery/commit/9170395ee06b1a486070f40ae5a4f8caa3a0ffd5))
* Configure babel ([1d21977](https://github.com/codesweetly/react-image-grid-gallery/commit/1d219770d829660173091ed51369986eff44bae5))
* Configure TypeScript ([9604bb9](https://github.com/codesweetly/react-image-grid-gallery/commit/9604bb9d66b4d094f8048b9497abc6f3d57da5a9))
* Create 'copy-files' script ([da952a0](https://github.com/codesweetly/react-image-grid-gallery/commit/da952a0d581bd24c99f056bda45bcb6ce3a04163))
* Create a LICENSE ([13c70f0](https://github.com/codesweetly/react-image-grid-gallery/commit/13c70f0aaeb50447e18af77911784f37ef730e52))
* Generate changelog ([e2e920a](https://github.com/codesweetly/react-image-grid-gallery/commit/e2e920aebdb04efb58d86fe7420d13008d183663))
* **github:** Configure release-it to auto-generate project's GitHub releases ([7312f92](https://github.com/codesweetly/react-image-grid-gallery/commit/7312f92dd5a6853c9fc2610af3f9e15aec7cde82))
* **github:** Specify the remote repo's url ([d800de3](https://github.com/codesweetly/react-image-grid-gallery/commit/d800de3cfee99c66bff13cd3b26865b4324c3d53))
* Ignore 'dist' folder ([12ae8a5](https://github.com/codesweetly/react-image-grid-gallery/commit/12ae8a5b362a1ba24cb9fe4650c77f7ff957ad64))
* Ignore npm-debug.log* ([aafe117](https://github.com/codesweetly/react-image-grid-gallery/commit/aafe117b241e6c0e2c5e41ebdd9ea138de3b0788))
* **ImageGallery:** Define ImgArryProps interface ([c6f04e1](https://github.com/codesweetly/react-image-grid-gallery/commit/c6f04e1ee7d8f4a52bea1b7424b186a2ab56976e))
* Initialize react-image-grid-gallery project ([bd11d5f](https://github.com/codesweetly/react-image-grid-gallery/commit/bd11d5fdedd36d33079bd6936041f6eca49cd26b))
* Make 'ImageGallery.js' the entry point ([14451d6](https://github.com/codesweetly/react-image-grid-gallery/commit/14451d664b7934364c7d9d5e37b0c04b20014804))
* **package-json:** Install packages for compiling React to JavaScript ([56cd72d](https://github.com/codesweetly/react-image-grid-gallery/commit/56cd72d0d8354b2d6017a9bd2b71a3854226e912))
* Provide info that helps people discover the package ([bf581de](https://github.com/codesweetly/react-image-grid-gallery/commit/bf581deb46c5e890a78e6da8d19cb9e7a289f957))
* **release-it:** Customize changelog's headings ([00943c8](https://github.com/codesweetly/react-image-grid-gallery/commit/00943c89ce7d9246ac8ab9aa71fc61eba77f41eb))
* **release-it:** Install version management plugin ([abfc611](https://github.com/codesweetly/react-image-grid-gallery/commit/abfc611be693890781a28d91a5d6ae5604c365c2))
* **release-it:** Let release-it auto-generate project's changelog ([8f12b98](https://github.com/codesweetly/react-image-grid-gallery/commit/8f12b98ffe81d4a073cdeeafb30785f0747d761e))
* **release-it:** Specify options to override ([bf58eee](https://github.com/codesweetly/react-image-grid-gallery/commit/bf58eee97895fc29207e1333f5c6d09692f79eee))
* **release-it:** Use plugin to provide recommended bump to release-it ([ebd37a4](https://github.com/codesweetly/react-image-grid-gallery/commit/ebd37a4b9f1e61e41f33ffd8c0be8ee124dfa986))
* Scope package under '@codesweetly/' ([5edc417](https://github.com/codesweetly/react-image-grid-gallery/commit/5edc4178cd84ec1ac92ef5b3476baa43deb29647))
* **typescript:** Define declaration file's location ([589842f](https://github.com/codesweetly/react-image-grid-gallery/commit/589842f62acef66338ca0d272bd255f9f7086415))
* Update changelog sections ([8763812](https://github.com/codesweetly/react-image-grid-gallery/commit/87638120ba6defe64ca15a57509dc6466bb01c64))
* Update to v0.2.0 ([6cce00e](https://github.com/codesweetly/react-image-grid-gallery/commit/6cce00e58713bbeea7ee1bf9f329c9cf3c515810))
* Update to v0.3.0 ([7156836](https://github.com/codesweetly/react-image-grid-gallery/commit/71568363c491cd3c8826b985123221026dfa190d))
* Update to v0.4.0 ([df9a6f9](https://github.com/codesweetly/react-image-grid-gallery/commit/df9a6f935ac9b7d8dda1998f1d966b238154fbc6))
* Update to v0.5.0 ([81acd21](https://github.com/codesweetly/react-image-grid-gallery/commit/81acd21ea742ba46212c522a480b1c666c33633e))


### 🐛 Bug Fix

* **release-it:** Change 'publishPath' to './dist' ([6edded2](https://github.com/codesweetly/react-image-grid-gallery/commit/6edded243a6494910ca5f532f65aeedd7b328803))
* Update dist's package.json file ([91261f1](https://github.com/codesweetly/react-image-grid-gallery/commit/91261f1f2c32ae6782748f343b52d3fd08d7480b))

## 0.7.0 (2023-05-29)


### 🚀 New Feature

* **ImageGallery:** Create ImageGallery component ([49c40a9](https://github.com/codesweetly/react-image-grid-gallery/commit/49c40a979383f3e381103490acb2c06a519f79b6))


### 🔄️ Code Refactoring

* Don't render <figcaption> if item.caption is undefined ([1c0c59e](https://github.com/codesweetly/react-image-grid-gallery/commit/1c0c59e3bbf061d5504365c3aa1017d05d073f13))
* Make caption optional ([c47d824](https://github.com/codesweetly/react-image-grid-gallery/commit/c47d824d475487e07b445f2a72641519f0649949))
* Rename 'ImgArryProps' to 'ImgArrayType' ([8062f6c](https://github.com/codesweetly/react-image-grid-gallery/commit/8062f6cb0933af5dd58ea3b710236e26dfc24e35))


### 💅 Styling and Formatting

* Add 'codesweetly-rigg' to class names ([4e12857](https://github.com/codesweetly/react-image-grid-gallery/commit/4e12857ca399d22a7005b1e9ef071dc41ef422dc))
* Add row-gap ([4a5b2d8](https://github.com/codesweetly/react-image-grid-gallery/commit/4a5b2d8e8e7e63fe65850b8366a128c07071b85a))
* Create ImageGallery's stylesheet ([70191bc](https://github.com/codesweetly/react-image-grid-gallery/commit/70191bcdf4bb8508227e89de3346556ac85fbec5))
* Define codesweetly-img's width ([ca01ba6](https://github.com/codesweetly/react-image-grid-gallery/commit/ca01ba6150a73b6860ac4e014e705e3694127c68))
* Delete 'data-theme=light' declaration ([d578205](https://github.com/codesweetly/react-image-grid-gallery/commit/d5782050bccf79d74e4217045eeb96935008985b))
* Delete the 'codesweetly-rigg-img' class ([c87e621](https://github.com/codesweetly/react-image-grid-gallery/commit/c87e62140526d38ff5217b90482e39f3e734a5da))


### 📝 Documentation

* Create README ([bc64b22](https://github.com/codesweetly/react-image-grid-gallery/commit/bc64b22ff4e2c4602f43ed430f6e8dc640888b50))


### 🏠 Chores

* Change version number to 0.0.0 ([24da08f](https://github.com/codesweetly/react-image-grid-gallery/commit/24da08fe65fbb0428913eba947ea979f6681fef1))
* **commitlint:** Install plugins to enforce Conventional Commits ([9170395](https://github.com/codesweetly/react-image-grid-gallery/commit/9170395ee06b1a486070f40ae5a4f8caa3a0ffd5))
* Configure babel ([1d21977](https://github.com/codesweetly/react-image-grid-gallery/commit/1d219770d829660173091ed51369986eff44bae5))
* Configure TypeScript ([9604bb9](https://github.com/codesweetly/react-image-grid-gallery/commit/9604bb9d66b4d094f8048b9497abc6f3d57da5a9))
* Create 'copy-files' script ([da952a0](https://github.com/codesweetly/react-image-grid-gallery/commit/da952a0d581bd24c99f056bda45bcb6ce3a04163))
* Create a LICENSE ([13c70f0](https://github.com/codesweetly/react-image-grid-gallery/commit/13c70f0aaeb50447e18af77911784f37ef730e52))
* Generate changelog ([e2e920a](https://github.com/codesweetly/react-image-grid-gallery/commit/e2e920aebdb04efb58d86fe7420d13008d183663))
* **github:** Configure release-it to auto-generate project's GitHub releases ([7312f92](https://github.com/codesweetly/react-image-grid-gallery/commit/7312f92dd5a6853c9fc2610af3f9e15aec7cde82))
* **github:** Specify the remote repo's url ([d800de3](https://github.com/codesweetly/react-image-grid-gallery/commit/d800de3cfee99c66bff13cd3b26865b4324c3d53))
* Ignore 'dist' folder ([12ae8a5](https://github.com/codesweetly/react-image-grid-gallery/commit/12ae8a5b362a1ba24cb9fe4650c77f7ff957ad64))
* Ignore npm-debug.log* ([aafe117](https://github.com/codesweetly/react-image-grid-gallery/commit/aafe117b241e6c0e2c5e41ebdd9ea138de3b0788))
* **ImageGallery:** Define ImgArryProps interface ([c6f04e1](https://github.com/codesweetly/react-image-grid-gallery/commit/c6f04e1ee7d8f4a52bea1b7424b186a2ab56976e))
* Initialize react-image-grid-gallery project ([bd11d5f](https://github.com/codesweetly/react-image-grid-gallery/commit/bd11d5fdedd36d33079bd6936041f6eca49cd26b))
* Make 'ImageGallery.js' the entry point ([14451d6](https://github.com/codesweetly/react-image-grid-gallery/commit/14451d664b7934364c7d9d5e37b0c04b20014804))
* **package-json:** Install packages for compiling React to JavaScript ([56cd72d](https://github.com/codesweetly/react-image-grid-gallery/commit/56cd72d0d8354b2d6017a9bd2b71a3854226e912))
* Provide info that helps people discover the package ([bf581de](https://github.com/codesweetly/react-image-grid-gallery/commit/bf581deb46c5e890a78e6da8d19cb9e7a289f957))
* **release-it:** Customize changelog's headings ([00943c8](https://github.com/codesweetly/react-image-grid-gallery/commit/00943c89ce7d9246ac8ab9aa71fc61eba77f41eb))
* **release-it:** Install version management plugin ([abfc611](https://github.com/codesweetly/react-image-grid-gallery/commit/abfc611be693890781a28d91a5d6ae5604c365c2))
* **release-it:** Let release-it auto-generate project's changelog ([8f12b98](https://github.com/codesweetly/react-image-grid-gallery/commit/8f12b98ffe81d4a073cdeeafb30785f0747d761e))
* **release-it:** Specify options to override ([bf58eee](https://github.com/codesweetly/react-image-grid-gallery/commit/bf58eee97895fc29207e1333f5c6d09692f79eee))
* **release-it:** Use plugin to provide recommended bump to release-it ([ebd37a4](https://github.com/codesweetly/react-image-grid-gallery/commit/ebd37a4b9f1e61e41f33ffd8c0be8ee124dfa986))
* Scope package under '@codesweetly/' ([5edc417](https://github.com/codesweetly/react-image-grid-gallery/commit/5edc4178cd84ec1ac92ef5b3476baa43deb29647))
* **typescript:** Define declaration file's location ([589842f](https://github.com/codesweetly/react-image-grid-gallery/commit/589842f62acef66338ca0d272bd255f9f7086415))
* Update changelog sections ([8763812](https://github.com/codesweetly/react-image-grid-gallery/commit/87638120ba6defe64ca15a57509dc6466bb01c64))
* Update to v0.2.0 ([6cce00e](https://github.com/codesweetly/react-image-grid-gallery/commit/6cce00e58713bbeea7ee1bf9f329c9cf3c515810))
* Update to v0.3.0 ([7156836](https://github.com/codesweetly/react-image-grid-gallery/commit/71568363c491cd3c8826b985123221026dfa190d))
* Update to v0.4.0 ([df9a6f9](https://github.com/codesweetly/react-image-grid-gallery/commit/df9a6f935ac9b7d8dda1998f1d966b238154fbc6))
* Update to v0.5.0 ([81acd21](https://github.com/codesweetly/react-image-grid-gallery/commit/81acd21ea742ba46212c522a480b1c666c33633e))


### 🐛 Bug Fix

* **release-it:** Change 'publishPath' to './dist' ([6edded2](https://github.com/codesweetly/react-image-grid-gallery/commit/6edded243a6494910ca5f532f65aeedd7b328803))

## 0.7.0 (2023-05-29)


### 🚀 New Feature

* **ImageGallery:** Create ImageGallery component ([49c40a9](https://github.com/codesweetly/react-image-grid-gallery/commit/49c40a979383f3e381103490acb2c06a519f79b6))


### 🔄️ Code Refactoring

* Don't render <figcaption> if item.caption is undefined ([1c0c59e](https://github.com/codesweetly/react-image-grid-gallery/commit/1c0c59e3bbf061d5504365c3aa1017d05d073f13))
* Make caption optional ([c47d824](https://github.com/codesweetly/react-image-grid-gallery/commit/c47d824d475487e07b445f2a72641519f0649949))
* Rename 'ImgArryProps' to 'ImgArrayType' ([8062f6c](https://github.com/codesweetly/react-image-grid-gallery/commit/8062f6cb0933af5dd58ea3b710236e26dfc24e35))


### 💅 Styling and Formatting

* Add 'codesweetly-rigg' to class names ([4e12857](https://github.com/codesweetly/react-image-grid-gallery/commit/4e12857ca399d22a7005b1e9ef071dc41ef422dc))
* Add row-gap ([4a5b2d8](https://github.com/codesweetly/react-image-grid-gallery/commit/4a5b2d8e8e7e63fe65850b8366a128c07071b85a))
* Create ImageGallery's stylesheet ([70191bc](https://github.com/codesweetly/react-image-grid-gallery/commit/70191bcdf4bb8508227e89de3346556ac85fbec5))
* Define codesweetly-img's width ([ca01ba6](https://github.com/codesweetly/react-image-grid-gallery/commit/ca01ba6150a73b6860ac4e014e705e3694127c68))
* Delete 'data-theme=light' declaration ([d578205](https://github.com/codesweetly/react-image-grid-gallery/commit/d5782050bccf79d74e4217045eeb96935008985b))
* Delete the 'codesweetly-rigg-img' class ([c87e621](https://github.com/codesweetly/react-image-grid-gallery/commit/c87e62140526d38ff5217b90482e39f3e734a5da))


### 📝 Documentation

* Create README ([bc64b22](https://github.com/codesweetly/react-image-grid-gallery/commit/bc64b22ff4e2c4602f43ed430f6e8dc640888b50))


### 🏠 Chores

* Change version number to 0.0.0 ([24da08f](https://github.com/codesweetly/react-image-grid-gallery/commit/24da08fe65fbb0428913eba947ea979f6681fef1))
* **commitlint:** Install plugins to enforce Conventional Commits ([9170395](https://github.com/codesweetly/react-image-grid-gallery/commit/9170395ee06b1a486070f40ae5a4f8caa3a0ffd5))
* Configure babel ([1d21977](https://github.com/codesweetly/react-image-grid-gallery/commit/1d219770d829660173091ed51369986eff44bae5))
* Configure TypeScript ([9604bb9](https://github.com/codesweetly/react-image-grid-gallery/commit/9604bb9d66b4d094f8048b9497abc6f3d57da5a9))
* Create 'copy-files' script ([da952a0](https://github.com/codesweetly/react-image-grid-gallery/commit/da952a0d581bd24c99f056bda45bcb6ce3a04163))
* Create a LICENSE ([13c70f0](https://github.com/codesweetly/react-image-grid-gallery/commit/13c70f0aaeb50447e18af77911784f37ef730e52))
* Generate changelog ([e2e920a](https://github.com/codesweetly/react-image-grid-gallery/commit/e2e920aebdb04efb58d86fe7420d13008d183663))
* **github:** Configure release-it to auto-generate project's GitHub releases ([7312f92](https://github.com/codesweetly/react-image-grid-gallery/commit/7312f92dd5a6853c9fc2610af3f9e15aec7cde82))
* **github:** Specify the remote repo's url ([d800de3](https://github.com/codesweetly/react-image-grid-gallery/commit/d800de3cfee99c66bff13cd3b26865b4324c3d53))
* Ignore 'dist' folder ([12ae8a5](https://github.com/codesweetly/react-image-grid-gallery/commit/12ae8a5b362a1ba24cb9fe4650c77f7ff957ad64))
* Ignore npm-debug.log* ([aafe117](https://github.com/codesweetly/react-image-grid-gallery/commit/aafe117b241e6c0e2c5e41ebdd9ea138de3b0788))
* **ImageGallery:** Define ImgArryProps interface ([c6f04e1](https://github.com/codesweetly/react-image-grid-gallery/commit/c6f04e1ee7d8f4a52bea1b7424b186a2ab56976e))
* Initialize react-image-grid-gallery project ([bd11d5f](https://github.com/codesweetly/react-image-grid-gallery/commit/bd11d5fdedd36d33079bd6936041f6eca49cd26b))
* Make 'ImageGallery.js' the entry point ([14451d6](https://github.com/codesweetly/react-image-grid-gallery/commit/14451d664b7934364c7d9d5e37b0c04b20014804))
* **package-json:** Install packages for compiling React to JavaScript ([56cd72d](https://github.com/codesweetly/react-image-grid-gallery/commit/56cd72d0d8354b2d6017a9bd2b71a3854226e912))
* Provide info that helps people discover the package ([bf581de](https://github.com/codesweetly/react-image-grid-gallery/commit/bf581deb46c5e890a78e6da8d19cb9e7a289f957))
* **release-it:** Customize changelog's headings ([00943c8](https://github.com/codesweetly/react-image-grid-gallery/commit/00943c89ce7d9246ac8ab9aa71fc61eba77f41eb))
* **release-it:** Install version management plugin ([abfc611](https://github.com/codesweetly/react-image-grid-gallery/commit/abfc611be693890781a28d91a5d6ae5604c365c2))
* **release-it:** Let release-it auto-generate project's changelog ([8f12b98](https://github.com/codesweetly/react-image-grid-gallery/commit/8f12b98ffe81d4a073cdeeafb30785f0747d761e))
* **release-it:** Specify options to override ([bf58eee](https://github.com/codesweetly/react-image-grid-gallery/commit/bf58eee97895fc29207e1333f5c6d09692f79eee))
* **release-it:** Use plugin to provide recommended bump to release-it ([ebd37a4](https://github.com/codesweetly/react-image-grid-gallery/commit/ebd37a4b9f1e61e41f33ffd8c0be8ee124dfa986))
* Scope package under '@codesweetly/' ([5edc417](https://github.com/codesweetly/react-image-grid-gallery/commit/5edc4178cd84ec1ac92ef5b3476baa43deb29647))
* **typescript:** Define declaration file's location ([589842f](https://github.com/codesweetly/react-image-grid-gallery/commit/589842f62acef66338ca0d272bd255f9f7086415))
* Update changelog sections ([8763812](https://github.com/codesweetly/react-image-grid-gallery/commit/87638120ba6defe64ca15a57509dc6466bb01c64))
* Update to v0.2.0 ([6cce00e](https://github.com/codesweetly/react-image-grid-gallery/commit/6cce00e58713bbeea7ee1bf9f329c9cf3c515810))
* Update to v0.3.0 ([7156836](https://github.com/codesweetly/react-image-grid-gallery/commit/71568363c491cd3c8826b985123221026dfa190d))
* Update to v0.4.0 ([df9a6f9](https://github.com/codesweetly/react-image-grid-gallery/commit/df9a6f935ac9b7d8dda1998f1d966b238154fbc6))
* Update to v0.5.0 ([81acd21](https://github.com/codesweetly/react-image-grid-gallery/commit/81acd21ea742ba46212c522a480b1c666c33633e))

## 0.6.0 (2023-05-29)


### 🚀 New Feature

* **ImageGallery:** Create ImageGallery component ([49c40a9](https://github.com/codesweetly/react-image-grid-gallery/commit/49c40a979383f3e381103490acb2c06a519f79b6))


### 🔄️ Code Refactoring

* Don't render <figcaption> if item.caption is undefined ([1c0c59e](https://github.com/codesweetly/react-image-grid-gallery/commit/1c0c59e3bbf061d5504365c3aa1017d05d073f13))
* Make caption optional ([c47d824](https://github.com/codesweetly/react-image-grid-gallery/commit/c47d824d475487e07b445f2a72641519f0649949))
* Rename 'ImgArryProps' to 'ImgArrayType' ([8062f6c](https://github.com/codesweetly/react-image-grid-gallery/commit/8062f6cb0933af5dd58ea3b710236e26dfc24e35))


### 💅 Styling and Formatting

* Add 'codesweetly-rigg' to class names ([4e12857](https://github.com/codesweetly/react-image-grid-gallery/commit/4e12857ca399d22a7005b1e9ef071dc41ef422dc))
* Add row-gap ([4a5b2d8](https://github.com/codesweetly/react-image-grid-gallery/commit/4a5b2d8e8e7e63fe65850b8366a128c07071b85a))
* Create ImageGallery's stylesheet ([70191bc](https://github.com/codesweetly/react-image-grid-gallery/commit/70191bcdf4bb8508227e89de3346556ac85fbec5))
* Define codesweetly-img's width ([ca01ba6](https://github.com/codesweetly/react-image-grid-gallery/commit/ca01ba6150a73b6860ac4e014e705e3694127c68))
* Delete 'data-theme=light' declaration ([d578205](https://github.com/codesweetly/react-image-grid-gallery/commit/d5782050bccf79d74e4217045eeb96935008985b))
* Delete the 'codesweetly-rigg-img' class ([c87e621](https://github.com/codesweetly/react-image-grid-gallery/commit/c87e62140526d38ff5217b90482e39f3e734a5da))


### 📝 Documentation

* Create README ([bc64b22](https://github.com/codesweetly/react-image-grid-gallery/commit/bc64b22ff4e2c4602f43ed430f6e8dc640888b50))


### 🏠 Chores

* Change version number to 0.0.0 ([24da08f](https://github.com/codesweetly/react-image-grid-gallery/commit/24da08fe65fbb0428913eba947ea979f6681fef1))
* **commitlint:** Install plugins to enforce Conventional Commits ([9170395](https://github.com/codesweetly/react-image-grid-gallery/commit/9170395ee06b1a486070f40ae5a4f8caa3a0ffd5))
* Configure babel ([1d21977](https://github.com/codesweetly/react-image-grid-gallery/commit/1d219770d829660173091ed51369986eff44bae5))
* Configure TypeScript ([9604bb9](https://github.com/codesweetly/react-image-grid-gallery/commit/9604bb9d66b4d094f8048b9497abc6f3d57da5a9))
* Create 'copy-files' script ([da952a0](https://github.com/codesweetly/react-image-grid-gallery/commit/da952a0d581bd24c99f056bda45bcb6ce3a04163))
* Create a LICENSE ([13c70f0](https://github.com/codesweetly/react-image-grid-gallery/commit/13c70f0aaeb50447e18af77911784f37ef730e52))
* Generate changelog ([e2e920a](https://github.com/codesweetly/react-image-grid-gallery/commit/e2e920aebdb04efb58d86fe7420d13008d183663))
* **github:** Configure release-it to auto-generate project's GitHub releases ([7312f92](https://github.com/codesweetly/react-image-grid-gallery/commit/7312f92dd5a6853c9fc2610af3f9e15aec7cde82))
* **github:** Specify the remote repo's url ([d800de3](https://github.com/codesweetly/react-image-grid-gallery/commit/d800de3cfee99c66bff13cd3b26865b4324c3d53))
* Ignore 'dist' folder ([12ae8a5](https://github.com/codesweetly/react-image-grid-gallery/commit/12ae8a5b362a1ba24cb9fe4650c77f7ff957ad64))
* Ignore npm-debug.log* ([aafe117](https://github.com/codesweetly/react-image-grid-gallery/commit/aafe117b241e6c0e2c5e41ebdd9ea138de3b0788))
* **ImageGallery:** Define ImgArryProps interface ([c6f04e1](https://github.com/codesweetly/react-image-grid-gallery/commit/c6f04e1ee7d8f4a52bea1b7424b186a2ab56976e))
* Initialize react-image-grid-gallery project ([bd11d5f](https://github.com/codesweetly/react-image-grid-gallery/commit/bd11d5fdedd36d33079bd6936041f6eca49cd26b))
* Make 'ImageGallery.js' the entry point ([14451d6](https://github.com/codesweetly/react-image-grid-gallery/commit/14451d664b7934364c7d9d5e37b0c04b20014804))
* **package-json:** Install packages for compiling React to JavaScript ([56cd72d](https://github.com/codesweetly/react-image-grid-gallery/commit/56cd72d0d8354b2d6017a9bd2b71a3854226e912))
* Provide info that helps people discover the package ([bf581de](https://github.com/codesweetly/react-image-grid-gallery/commit/bf581deb46c5e890a78e6da8d19cb9e7a289f957))
* **release-it:** Customize changelog's headings ([00943c8](https://github.com/codesweetly/react-image-grid-gallery/commit/00943c89ce7d9246ac8ab9aa71fc61eba77f41eb))
* **release-it:** Install version management plugin ([abfc611](https://github.com/codesweetly/react-image-grid-gallery/commit/abfc611be693890781a28d91a5d6ae5604c365c2))
* **release-it:** Let release-it auto-generate project's changelog ([8f12b98](https://github.com/codesweetly/react-image-grid-gallery/commit/8f12b98ffe81d4a073cdeeafb30785f0747d761e))
* **release-it:** Specify options to override ([bf58eee](https://github.com/codesweetly/react-image-grid-gallery/commit/bf58eee97895fc29207e1333f5c6d09692f79eee))
* **release-it:** Use plugin to provide recommended bump to release-it ([ebd37a4](https://github.com/codesweetly/react-image-grid-gallery/commit/ebd37a4b9f1e61e41f33ffd8c0be8ee124dfa986))
* **typescript:** Define declaration file's location ([589842f](https://github.com/codesweetly/react-image-grid-gallery/commit/589842f62acef66338ca0d272bd255f9f7086415))
* Update changelog sections ([8763812](https://github.com/codesweetly/react-image-grid-gallery/commit/87638120ba6defe64ca15a57509dc6466bb01c64))
* Update to v0.2.0 ([6cce00e](https://github.com/codesweetly/react-image-grid-gallery/commit/6cce00e58713bbeea7ee1bf9f329c9cf3c515810))
* Update to v0.3.0 ([7156836](https://github.com/codesweetly/react-image-grid-gallery/commit/71568363c491cd3c8826b985123221026dfa190d))
* Update to v0.4.0 ([df9a6f9](https://github.com/codesweetly/react-image-grid-gallery/commit/df9a6f935ac9b7d8dda1998f1d966b238154fbc6))
* Update to v0.5.0 ([81acd21](https://github.com/codesweetly/react-image-grid-gallery/commit/81acd21ea742ba46212c522a480b1c666c33633e))

## 0.5.0 (2023-05-29)


### 🚀 New Feature

* **ImageGallery:** Create ImageGallery component ([49c40a9](https://github.com/codesweetly/react-image-grid-gallery/commit/49c40a979383f3e381103490acb2c06a519f79b6))


### 🔄️ Code Refactoring

* Don't render <figcaption> if item.caption is undefined ([1c0c59e](https://github.com/codesweetly/react-image-grid-gallery/commit/1c0c59e3bbf061d5504365c3aa1017d05d073f13))
* Make caption optional ([c47d824](https://github.com/codesweetly/react-image-grid-gallery/commit/c47d824d475487e07b445f2a72641519f0649949))
* Rename 'ImgArryProps' to 'ImgArrayType' ([8062f6c](https://github.com/codesweetly/react-image-grid-gallery/commit/8062f6cb0933af5dd58ea3b710236e26dfc24e35))


### 💅 Styling and Formatting

* Add 'codesweetly-rigg' to class names ([4e12857](https://github.com/codesweetly/react-image-grid-gallery/commit/4e12857ca399d22a7005b1e9ef071dc41ef422dc))
* Add row-gap ([4a5b2d8](https://github.com/codesweetly/react-image-grid-gallery/commit/4a5b2d8e8e7e63fe65850b8366a128c07071b85a))
* Create ImageGallery's stylesheet ([70191bc](https://github.com/codesweetly/react-image-grid-gallery/commit/70191bcdf4bb8508227e89de3346556ac85fbec5))
* Define codesweetly-img's width ([ca01ba6](https://github.com/codesweetly/react-image-grid-gallery/commit/ca01ba6150a73b6860ac4e014e705e3694127c68))
* Delete 'data-theme=light' declaration ([d578205](https://github.com/codesweetly/react-image-grid-gallery/commit/d5782050bccf79d74e4217045eeb96935008985b))
* Delete the 'codesweetly-rigg-img' class ([c87e621](https://github.com/codesweetly/react-image-grid-gallery/commit/c87e62140526d38ff5217b90482e39f3e734a5da))


### 📝 Documentation

* Create README ([bc64b22](https://github.com/codesweetly/react-image-grid-gallery/commit/bc64b22ff4e2c4602f43ed430f6e8dc640888b50))


### 🏠 Chores

* Change version number to 0.0.0 ([24da08f](https://github.com/codesweetly/react-image-grid-gallery/commit/24da08fe65fbb0428913eba947ea979f6681fef1))
* **commitlint:** Install plugins to enforce Conventional Commits ([9170395](https://github.com/codesweetly/react-image-grid-gallery/commit/9170395ee06b1a486070f40ae5a4f8caa3a0ffd5))
* Configure babel ([1d21977](https://github.com/codesweetly/react-image-grid-gallery/commit/1d219770d829660173091ed51369986eff44bae5))
* Configure TypeScript ([9604bb9](https://github.com/codesweetly/react-image-grid-gallery/commit/9604bb9d66b4d094f8048b9497abc6f3d57da5a9))
* Create 'copy-files' script ([da952a0](https://github.com/codesweetly/react-image-grid-gallery/commit/da952a0d581bd24c99f056bda45bcb6ce3a04163))
* Create a LICENSE ([13c70f0](https://github.com/codesweetly/react-image-grid-gallery/commit/13c70f0aaeb50447e18af77911784f37ef730e52))
* Generate changelog ([e2e920a](https://github.com/codesweetly/react-image-grid-gallery/commit/e2e920aebdb04efb58d86fe7420d13008d183663))
* **github:** Configure release-it to auto-generate project's GitHub releases ([7312f92](https://github.com/codesweetly/react-image-grid-gallery/commit/7312f92dd5a6853c9fc2610af3f9e15aec7cde82))
* **github:** Specify the remote repo's url ([d800de3](https://github.com/codesweetly/react-image-grid-gallery/commit/d800de3cfee99c66bff13cd3b26865b4324c3d53))
* Ignore 'dist' folder ([12ae8a5](https://github.com/codesweetly/react-image-grid-gallery/commit/12ae8a5b362a1ba24cb9fe4650c77f7ff957ad64))
* Ignore npm-debug.log* ([aafe117](https://github.com/codesweetly/react-image-grid-gallery/commit/aafe117b241e6c0e2c5e41ebdd9ea138de3b0788))
* **ImageGallery:** Define ImgArryProps interface ([c6f04e1](https://github.com/codesweetly/react-image-grid-gallery/commit/c6f04e1ee7d8f4a52bea1b7424b186a2ab56976e))
* Initialize react-image-grid-gallery project ([bd11d5f](https://github.com/codesweetly/react-image-grid-gallery/commit/bd11d5fdedd36d33079bd6936041f6eca49cd26b))
* Make 'ImageGallery.js' the entry point ([14451d6](https://github.com/codesweetly/react-image-grid-gallery/commit/14451d664b7934364c7d9d5e37b0c04b20014804))
* **package-json:** Install packages for compiling React to JavaScript ([56cd72d](https://github.com/codesweetly/react-image-grid-gallery/commit/56cd72d0d8354b2d6017a9bd2b71a3854226e912))
* Provide info that helps people discover the package ([bf581de](https://github.com/codesweetly/react-image-grid-gallery/commit/bf581deb46c5e890a78e6da8d19cb9e7a289f957))
* **release-it:** Customize changelog's headings ([00943c8](https://github.com/codesweetly/react-image-grid-gallery/commit/00943c89ce7d9246ac8ab9aa71fc61eba77f41eb))
* **release-it:** Install version management plugin ([abfc611](https://github.com/codesweetly/react-image-grid-gallery/commit/abfc611be693890781a28d91a5d6ae5604c365c2))
* **release-it:** Let release-it auto-generate project's changelog ([8f12b98](https://github.com/codesweetly/react-image-grid-gallery/commit/8f12b98ffe81d4a073cdeeafb30785f0747d761e))
* **release-it:** Specify options to override ([bf58eee](https://github.com/codesweetly/react-image-grid-gallery/commit/bf58eee97895fc29207e1333f5c6d09692f79eee))
* **release-it:** Use plugin to provide recommended bump to release-it ([ebd37a4](https://github.com/codesweetly/react-image-grid-gallery/commit/ebd37a4b9f1e61e41f33ffd8c0be8ee124dfa986))
* **typescript:** Define declaration file's location ([589842f](https://github.com/codesweetly/react-image-grid-gallery/commit/589842f62acef66338ca0d272bd255f9f7086415))
* Update changelog sections ([8763812](https://github.com/codesweetly/react-image-grid-gallery/commit/87638120ba6defe64ca15a57509dc6466bb01c64))
* Update to v0.2.0 ([6cce00e](https://github.com/codesweetly/react-image-grid-gallery/commit/6cce00e58713bbeea7ee1bf9f329c9cf3c515810))
* Update to v0.3.0 ([7156836](https://github.com/codesweetly/react-image-grid-gallery/commit/71568363c491cd3c8826b985123221026dfa190d))
* Update to v0.4.0 ([df9a6f9](https://github.com/codesweetly/react-image-grid-gallery/commit/df9a6f935ac9b7d8dda1998f1d966b238154fbc6))

## 0.4.0 (2023-05-29)


### 🚀 New Feature

* **ImageGallery:** Create ImageGallery component ([49c40a9](https://github.com/codesweetly/react-image-grid-gallery/commit/49c40a979383f3e381103490acb2c06a519f79b6))


### 🔄️ Code Refactoring

* Don't render <figcaption> if item.caption is undefined ([1c0c59e](https://github.com/codesweetly/react-image-grid-gallery/commit/1c0c59e3bbf061d5504365c3aa1017d05d073f13))
* Make caption optional ([c47d824](https://github.com/codesweetly/react-image-grid-gallery/commit/c47d824d475487e07b445f2a72641519f0649949))
* Rename 'ImgArryProps' to 'ImgArrayType' ([8062f6c](https://github.com/codesweetly/react-image-grid-gallery/commit/8062f6cb0933af5dd58ea3b710236e26dfc24e35))


### 💅 Styling and Formatting

* Add 'codesweetly-rigg' to class names ([4e12857](https://github.com/codesweetly/react-image-grid-gallery/commit/4e12857ca399d22a7005b1e9ef071dc41ef422dc))
* Add row-gap ([4a5b2d8](https://github.com/codesweetly/react-image-grid-gallery/commit/4a5b2d8e8e7e63fe65850b8366a128c07071b85a))
* Create ImageGallery's stylesheet ([70191bc](https://github.com/codesweetly/react-image-grid-gallery/commit/70191bcdf4bb8508227e89de3346556ac85fbec5))
* Define codesweetly-img's width ([ca01ba6](https://github.com/codesweetly/react-image-grid-gallery/commit/ca01ba6150a73b6860ac4e014e705e3694127c68))
* Delete 'data-theme=light' declaration ([d578205](https://github.com/codesweetly/react-image-grid-gallery/commit/d5782050bccf79d74e4217045eeb96935008985b))
* Delete the 'codesweetly-rigg-img' class ([c87e621](https://github.com/codesweetly/react-image-grid-gallery/commit/c87e62140526d38ff5217b90482e39f3e734a5da))


### 📝 Documentation

* Create README ([bc64b22](https://github.com/codesweetly/react-image-grid-gallery/commit/bc64b22ff4e2c4602f43ed430f6e8dc640888b50))


### 🏠 Chores

* Change version number to 0.0.0 ([24da08f](https://github.com/codesweetly/react-image-grid-gallery/commit/24da08fe65fbb0428913eba947ea979f6681fef1))
* **commitlint:** Install plugins to enforce Conventional Commits ([9170395](https://github.com/codesweetly/react-image-grid-gallery/commit/9170395ee06b1a486070f40ae5a4f8caa3a0ffd5))
* Configure babel ([1d21977](https://github.com/codesweetly/react-image-grid-gallery/commit/1d219770d829660173091ed51369986eff44bae5))
* Configure TypeScript ([9604bb9](https://github.com/codesweetly/react-image-grid-gallery/commit/9604bb9d66b4d094f8048b9497abc6f3d57da5a9))
* Create 'copy-files' script ([da952a0](https://github.com/codesweetly/react-image-grid-gallery/commit/da952a0d581bd24c99f056bda45bcb6ce3a04163))
* Create a LICENSE ([13c70f0](https://github.com/codesweetly/react-image-grid-gallery/commit/13c70f0aaeb50447e18af77911784f37ef730e52))
* Generate changelog ([e2e920a](https://github.com/codesweetly/react-image-grid-gallery/commit/e2e920aebdb04efb58d86fe7420d13008d183663))
* **github:** Configure release-it to auto-generate project's GitHub releases ([7312f92](https://github.com/codesweetly/react-image-grid-gallery/commit/7312f92dd5a6853c9fc2610af3f9e15aec7cde82))
* **github:** Specify the remote repo's url ([d800de3](https://github.com/codesweetly/react-image-grid-gallery/commit/d800de3cfee99c66bff13cd3b26865b4324c3d53))
* Ignore 'dist' folder ([12ae8a5](https://github.com/codesweetly/react-image-grid-gallery/commit/12ae8a5b362a1ba24cb9fe4650c77f7ff957ad64))
* Ignore npm-debug.log* ([aafe117](https://github.com/codesweetly/react-image-grid-gallery/commit/aafe117b241e6c0e2c5e41ebdd9ea138de3b0788))
* **ImageGallery:** Define ImgArryProps interface ([c6f04e1](https://github.com/codesweetly/react-image-grid-gallery/commit/c6f04e1ee7d8f4a52bea1b7424b186a2ab56976e))
* Initialize react-image-grid-gallery project ([bd11d5f](https://github.com/codesweetly/react-image-grid-gallery/commit/bd11d5fdedd36d33079bd6936041f6eca49cd26b))
* Make 'ImageGallery.js' the entry point ([14451d6](https://github.com/codesweetly/react-image-grid-gallery/commit/14451d664b7934364c7d9d5e37b0c04b20014804))
* **package-json:** Install packages for compiling React to JavaScript ([56cd72d](https://github.com/codesweetly/react-image-grid-gallery/commit/56cd72d0d8354b2d6017a9bd2b71a3854226e912))
* Provide info that helps people discover the package ([bf581de](https://github.com/codesweetly/react-image-grid-gallery/commit/bf581deb46c5e890a78e6da8d19cb9e7a289f957))
* **release-it:** Customize changelog's headings ([00943c8](https://github.com/codesweetly/react-image-grid-gallery/commit/00943c89ce7d9246ac8ab9aa71fc61eba77f41eb))
* **release-it:** Install version management plugin ([abfc611](https://github.com/codesweetly/react-image-grid-gallery/commit/abfc611be693890781a28d91a5d6ae5604c365c2))
* **release-it:** Let release-it auto-generate project's changelog ([8f12b98](https://github.com/codesweetly/react-image-grid-gallery/commit/8f12b98ffe81d4a073cdeeafb30785f0747d761e))
* **release-it:** Specify options to override ([bf58eee](https://github.com/codesweetly/react-image-grid-gallery/commit/bf58eee97895fc29207e1333f5c6d09692f79eee))
* **release-it:** Use plugin to provide recommended bump to release-it ([ebd37a4](https://github.com/codesweetly/react-image-grid-gallery/commit/ebd37a4b9f1e61e41f33ffd8c0be8ee124dfa986))
* **typescript:** Define declaration file's location ([589842f](https://github.com/codesweetly/react-image-grid-gallery/commit/589842f62acef66338ca0d272bd255f9f7086415))
* Update changelog sections ([8763812](https://github.com/codesweetly/react-image-grid-gallery/commit/87638120ba6defe64ca15a57509dc6466bb01c64))
* Update to v0.2.0 ([6cce00e](https://github.com/codesweetly/react-image-grid-gallery/commit/6cce00e58713bbeea7ee1bf9f329c9cf3c515810))
* Update to v0.3.0 ([7156836](https://github.com/codesweetly/react-image-grid-gallery/commit/71568363c491cd3c8826b985123221026dfa190d))

## 0.3.0 (2023-05-29)


### 🚀 New Feature

* **ImageGallery:** Create ImageGallery component ([49c40a9](https://github.com/codesweetly/react-image-grid-gallery/commit/49c40a979383f3e381103490acb2c06a519f79b6))


### 🔄️ Code Refactoring

* Don't render <figcaption> if item.caption is undefined ([1c0c59e](https://github.com/codesweetly/react-image-grid-gallery/commit/1c0c59e3bbf061d5504365c3aa1017d05d073f13))
* Make caption optional ([c47d824](https://github.com/codesweetly/react-image-grid-gallery/commit/c47d824d475487e07b445f2a72641519f0649949))
* Rename 'ImgArryProps' to 'ImgArrayType' ([8062f6c](https://github.com/codesweetly/react-image-grid-gallery/commit/8062f6cb0933af5dd58ea3b710236e26dfc24e35))


### 💅 Styling and Formatting

* Add 'codesweetly-rigg' to class names ([4e12857](https://github.com/codesweetly/react-image-grid-gallery/commit/4e12857ca399d22a7005b1e9ef071dc41ef422dc))
* Add row-gap ([4a5b2d8](https://github.com/codesweetly/react-image-grid-gallery/commit/4a5b2d8e8e7e63fe65850b8366a128c07071b85a))
* Create ImageGallery's stylesheet ([70191bc](https://github.com/codesweetly/react-image-grid-gallery/commit/70191bcdf4bb8508227e89de3346556ac85fbec5))
* Define codesweetly-img's width ([ca01ba6](https://github.com/codesweetly/react-image-grid-gallery/commit/ca01ba6150a73b6860ac4e014e705e3694127c68))
* Delete 'data-theme=light' declaration ([d578205](https://github.com/codesweetly/react-image-grid-gallery/commit/d5782050bccf79d74e4217045eeb96935008985b))
* Delete the 'codesweetly-rigg-img' class ([c87e621](https://github.com/codesweetly/react-image-grid-gallery/commit/c87e62140526d38ff5217b90482e39f3e734a5da))


### 📝 Documentation

* Create README ([bc64b22](https://github.com/codesweetly/react-image-grid-gallery/commit/bc64b22ff4e2c4602f43ed430f6e8dc640888b50))


### 🏠 Chores

* Change version number to 0.0.0 ([24da08f](https://github.com/codesweetly/react-image-grid-gallery/commit/24da08fe65fbb0428913eba947ea979f6681fef1))
* **commitlint:** Install plugins to enforce Conventional Commits ([9170395](https://github.com/codesweetly/react-image-grid-gallery/commit/9170395ee06b1a486070f40ae5a4f8caa3a0ffd5))
* Configure babel ([1d21977](https://github.com/codesweetly/react-image-grid-gallery/commit/1d219770d829660173091ed51369986eff44bae5))
* Configure TypeScript ([9604bb9](https://github.com/codesweetly/react-image-grid-gallery/commit/9604bb9d66b4d094f8048b9497abc6f3d57da5a9))
* Create 'copy-files' script ([da952a0](https://github.com/codesweetly/react-image-grid-gallery/commit/da952a0d581bd24c99f056bda45bcb6ce3a04163))
* Create a LICENSE ([13c70f0](https://github.com/codesweetly/react-image-grid-gallery/commit/13c70f0aaeb50447e18af77911784f37ef730e52))
* Generate changelog ([e2e920a](https://github.com/codesweetly/react-image-grid-gallery/commit/e2e920aebdb04efb58d86fe7420d13008d183663))
* **github:** Configure release-it to auto-generate project's GitHub releases ([7312f92](https://github.com/codesweetly/react-image-grid-gallery/commit/7312f92dd5a6853c9fc2610af3f9e15aec7cde82))
* **github:** Specify the remote repo's url ([d800de3](https://github.com/codesweetly/react-image-grid-gallery/commit/d800de3cfee99c66bff13cd3b26865b4324c3d53))
* Ignore 'dist' folder ([12ae8a5](https://github.com/codesweetly/react-image-grid-gallery/commit/12ae8a5b362a1ba24cb9fe4650c77f7ff957ad64))
* Ignore npm-debug.log* ([aafe117](https://github.com/codesweetly/react-image-grid-gallery/commit/aafe117b241e6c0e2c5e41ebdd9ea138de3b0788))
* **ImageGallery:** Define ImgArryProps interface ([c6f04e1](https://github.com/codesweetly/react-image-grid-gallery/commit/c6f04e1ee7d8f4a52bea1b7424b186a2ab56976e))
* Initialize react-image-grid-gallery project ([bd11d5f](https://github.com/codesweetly/react-image-grid-gallery/commit/bd11d5fdedd36d33079bd6936041f6eca49cd26b))
* Make 'ImageGallery.js' the entry point ([14451d6](https://github.com/codesweetly/react-image-grid-gallery/commit/14451d664b7934364c7d9d5e37b0c04b20014804))
* **package-json:** Install packages for compiling React to JavaScript ([56cd72d](https://github.com/codesweetly/react-image-grid-gallery/commit/56cd72d0d8354b2d6017a9bd2b71a3854226e912))
* Provide info that helps people discover the package ([bf581de](https://github.com/codesweetly/react-image-grid-gallery/commit/bf581deb46c5e890a78e6da8d19cb9e7a289f957))
* **release-it:** Customize changelog's headings ([00943c8](https://github.com/codesweetly/react-image-grid-gallery/commit/00943c89ce7d9246ac8ab9aa71fc61eba77f41eb))
* **release-it:** Install version management plugin ([abfc611](https://github.com/codesweetly/react-image-grid-gallery/commit/abfc611be693890781a28d91a5d6ae5604c365c2))
* **release-it:** Let release-it auto-generate project's changelog ([8f12b98](https://github.com/codesweetly/react-image-grid-gallery/commit/8f12b98ffe81d4a073cdeeafb30785f0747d761e))
* **release-it:** Specify options to override ([bf58eee](https://github.com/codesweetly/react-image-grid-gallery/commit/bf58eee97895fc29207e1333f5c6d09692f79eee))
* **release-it:** Use plugin to provide recommended bump to release-it ([ebd37a4](https://github.com/codesweetly/react-image-grid-gallery/commit/ebd37a4b9f1e61e41f33ffd8c0be8ee124dfa986))
* **typescript:** Define declaration file's location ([589842f](https://github.com/codesweetly/react-image-grid-gallery/commit/589842f62acef66338ca0d272bd255f9f7086415))
* Update changelog sections ([8763812](https://github.com/codesweetly/react-image-grid-gallery/commit/87638120ba6defe64ca15a57509dc6466bb01c64))
* Update to v0.2.0 ([6cce00e](https://github.com/codesweetly/react-image-grid-gallery/commit/6cce00e58713bbeea7ee1bf9f329c9cf3c515810))

## 0.2.0 (2023-05-29)


### 🚀 New Feature

* **ImageGallery:** Create ImageGallery component ([49c40a9](https://github.com/codesweetly/react-image-grid-gallery/commit/49c40a979383f3e381103490acb2c06a519f79b6))


### 🔄️ Code Refactoring

* Don't render <figcaption> if item.caption is undefined ([1c0c59e](https://github.com/codesweetly/react-image-grid-gallery/commit/1c0c59e3bbf061d5504365c3aa1017d05d073f13))
* Make caption optional ([c47d824](https://github.com/codesweetly/react-image-grid-gallery/commit/c47d824d475487e07b445f2a72641519f0649949))
* Rename 'ImgArryProps' to 'ImgArrayType' ([8062f6c](https://github.com/codesweetly/react-image-grid-gallery/commit/8062f6cb0933af5dd58ea3b710236e26dfc24e35))


### 💅 Styling and Formatting

* Add 'codesweetly-rigg' to class names ([4e12857](https://github.com/codesweetly/react-image-grid-gallery/commit/4e12857ca399d22a7005b1e9ef071dc41ef422dc))
* Add row-gap ([4a5b2d8](https://github.com/codesweetly/react-image-grid-gallery/commit/4a5b2d8e8e7e63fe65850b8366a128c07071b85a))
* Create ImageGallery's stylesheet ([70191bc](https://github.com/codesweetly/react-image-grid-gallery/commit/70191bcdf4bb8508227e89de3346556ac85fbec5))
* Define codesweetly-img's width ([ca01ba6](https://github.com/codesweetly/react-image-grid-gallery/commit/ca01ba6150a73b6860ac4e014e705e3694127c68))
* Delete 'data-theme=light' declaration ([d578205](https://github.com/codesweetly/react-image-grid-gallery/commit/d5782050bccf79d74e4217045eeb96935008985b))
* Delete the 'codesweetly-rigg-img' class ([c87e621](https://github.com/codesweetly/react-image-grid-gallery/commit/c87e62140526d38ff5217b90482e39f3e734a5da))


### 📝 Documentation

* Create README ([bc64b22](https://github.com/codesweetly/react-image-grid-gallery/commit/bc64b22ff4e2c4602f43ed430f6e8dc640888b50))


### 🏠 Chores

* Change version number to 0.0.0 ([24da08f](https://github.com/codesweetly/react-image-grid-gallery/commit/24da08fe65fbb0428913eba947ea979f6681fef1))
* **commitlint:** Install plugins to enforce Conventional Commits ([9170395](https://github.com/codesweetly/react-image-grid-gallery/commit/9170395ee06b1a486070f40ae5a4f8caa3a0ffd5))
* Configure babel ([1d21977](https://github.com/codesweetly/react-image-grid-gallery/commit/1d219770d829660173091ed51369986eff44bae5))
* Configure TypeScript ([9604bb9](https://github.com/codesweetly/react-image-grid-gallery/commit/9604bb9d66b4d094f8048b9497abc6f3d57da5a9))
* Create 'copy-files' script ([da952a0](https://github.com/codesweetly/react-image-grid-gallery/commit/da952a0d581bd24c99f056bda45bcb6ce3a04163))
* Create a LICENSE ([13c70f0](https://github.com/codesweetly/react-image-grid-gallery/commit/13c70f0aaeb50447e18af77911784f37ef730e52))
* Generate changelog ([e2e920a](https://github.com/codesweetly/react-image-grid-gallery/commit/e2e920aebdb04efb58d86fe7420d13008d183663))
* **github:** Configure release-it to auto-generate project's GitHub releases ([7312f92](https://github.com/codesweetly/react-image-grid-gallery/commit/7312f92dd5a6853c9fc2610af3f9e15aec7cde82))
* **github:** Specify the remote repo's url ([d800de3](https://github.com/codesweetly/react-image-grid-gallery/commit/d800de3cfee99c66bff13cd3b26865b4324c3d53))
* Ignore 'dist' folder ([12ae8a5](https://github.com/codesweetly/react-image-grid-gallery/commit/12ae8a5b362a1ba24cb9fe4650c77f7ff957ad64))
* Ignore npm-debug.log* ([aafe117](https://github.com/codesweetly/react-image-grid-gallery/commit/aafe117b241e6c0e2c5e41ebdd9ea138de3b0788))
* **ImageGallery:** Define ImgArryProps interface ([c6f04e1](https://github.com/codesweetly/react-image-grid-gallery/commit/c6f04e1ee7d8f4a52bea1b7424b186a2ab56976e))
* Initialize react-image-grid-gallery project ([bd11d5f](https://github.com/codesweetly/react-image-grid-gallery/commit/bd11d5fdedd36d33079bd6936041f6eca49cd26b))
* Make 'ImageGallery.js' the entry point ([14451d6](https://github.com/codesweetly/react-image-grid-gallery/commit/14451d664b7934364c7d9d5e37b0c04b20014804))
* **package-json:** Install packages for compiling React to JavaScript ([56cd72d](https://github.com/codesweetly/react-image-grid-gallery/commit/56cd72d0d8354b2d6017a9bd2b71a3854226e912))
* Provide info that helps people discover the package ([bf581de](https://github.com/codesweetly/react-image-grid-gallery/commit/bf581deb46c5e890a78e6da8d19cb9e7a289f957))
* **release-it:** Customize changelog's headings ([00943c8](https://github.com/codesweetly/react-image-grid-gallery/commit/00943c89ce7d9246ac8ab9aa71fc61eba77f41eb))
* **release-it:** Install version management plugin ([abfc611](https://github.com/codesweetly/react-image-grid-gallery/commit/abfc611be693890781a28d91a5d6ae5604c365c2))
* **release-it:** Let release-it auto-generate project's changelog ([8f12b98](https://github.com/codesweetly/react-image-grid-gallery/commit/8f12b98ffe81d4a073cdeeafb30785f0747d761e))
* **release-it:** Specify options to override ([bf58eee](https://github.com/codesweetly/react-image-grid-gallery/commit/bf58eee97895fc29207e1333f5c6d09692f79eee))
* **release-it:** Use plugin to provide recommended bump to release-it ([ebd37a4](https://github.com/codesweetly/react-image-grid-gallery/commit/ebd37a4b9f1e61e41f33ffd8c0be8ee124dfa986))
* **typescript:** Define declaration file's location ([589842f](https://github.com/codesweetly/react-image-grid-gallery/commit/589842f62acef66338ca0d272bd255f9f7086415))
* Update changelog sections ([8763812](https://github.com/codesweetly/react-image-grid-gallery/commit/87638120ba6defe64ca15a57509dc6466bb01c64))

## 0.1.0 (2023-05-29)


### 🚀 New Feature

* **ImageGallery:** Create ImageGallery component ([49c40a9](https://github.com/codesweetly/react-image-grid-gallery/commit/49c40a979383f3e381103490acb2c06a519f79b6))


### 🔄️ Code Refactoring

* Don't render <figcaption> if item.caption is undefined ([1c0c59e](https://github.com/codesweetly/react-image-grid-gallery/commit/1c0c59e3bbf061d5504365c3aa1017d05d073f13))
* Make caption optional ([c47d824](https://github.com/codesweetly/react-image-grid-gallery/commit/c47d824d475487e07b445f2a72641519f0649949))
* Rename 'ImgArryProps' to 'ImgArrayType' ([8062f6c](https://github.com/codesweetly/react-image-grid-gallery/commit/8062f6cb0933af5dd58ea3b710236e26dfc24e35))


### 💅 Styling and Formatting

* Add 'codesweetly-rigg' to class names ([4e12857](https://github.com/codesweetly/react-image-grid-gallery/commit/4e12857ca399d22a7005b1e9ef071dc41ef422dc))
* Add row-gap ([4a5b2d8](https://github.com/codesweetly/react-image-grid-gallery/commit/4a5b2d8e8e7e63fe65850b8366a128c07071b85a))
* Create ImageGallery's stylesheet ([70191bc](https://github.com/codesweetly/react-image-grid-gallery/commit/70191bcdf4bb8508227e89de3346556ac85fbec5))
* Define codesweetly-img's width ([ca01ba6](https://github.com/codesweetly/react-image-grid-gallery/commit/ca01ba6150a73b6860ac4e014e705e3694127c68))
* Delete 'data-theme=light' declaration ([d578205](https://github.com/codesweetly/react-image-grid-gallery/commit/d5782050bccf79d74e4217045eeb96935008985b))
* Delete the 'codesweetly-rigg-img' class ([c87e621](https://github.com/codesweetly/react-image-grid-gallery/commit/c87e62140526d38ff5217b90482e39f3e734a5da))


### 📝 Documentation

* Create README ([bc64b22](https://github.com/codesweetly/react-image-grid-gallery/commit/bc64b22ff4e2c4602f43ed430f6e8dc640888b50))


### 🏠 Chores

* Change version number to 0.0.0 ([24da08f](https://github.com/codesweetly/react-image-grid-gallery/commit/24da08fe65fbb0428913eba947ea979f6681fef1))
* **commitlint:** Install plugins to enforce Conventional Commits ([9170395](https://github.com/codesweetly/react-image-grid-gallery/commit/9170395ee06b1a486070f40ae5a4f8caa3a0ffd5))
* Configure babel ([1d21977](https://github.com/codesweetly/react-image-grid-gallery/commit/1d219770d829660173091ed51369986eff44bae5))
* Configure TypeScript ([9604bb9](https://github.com/codesweetly/react-image-grid-gallery/commit/9604bb9d66b4d094f8048b9497abc6f3d57da5a9))
* Create 'copy-files' script ([da952a0](https://github.com/codesweetly/react-image-grid-gallery/commit/da952a0d581bd24c99f056bda45bcb6ce3a04163))
* Create a LICENSE ([13c70f0](https://github.com/codesweetly/react-image-grid-gallery/commit/13c70f0aaeb50447e18af77911784f37ef730e52))
* **github:** Configure release-it to auto-generate project's GitHub releases ([7312f92](https://github.com/codesweetly/react-image-grid-gallery/commit/7312f92dd5a6853c9fc2610af3f9e15aec7cde82))
* **github:** Specify the remote repo's url ([d800de3](https://github.com/codesweetly/react-image-grid-gallery/commit/d800de3cfee99c66bff13cd3b26865b4324c3d53))
* Ignore 'dist' folder ([12ae8a5](https://github.com/codesweetly/react-image-grid-gallery/commit/12ae8a5b362a1ba24cb9fe4650c77f7ff957ad64))
* Ignore npm-debug.log* ([aafe117](https://github.com/codesweetly/react-image-grid-gallery/commit/aafe117b241e6c0e2c5e41ebdd9ea138de3b0788))
* **ImageGallery:** Define ImgArryProps interface ([c6f04e1](https://github.com/codesweetly/react-image-grid-gallery/commit/c6f04e1ee7d8f4a52bea1b7424b186a2ab56976e))
* Initialize react-image-grid-gallery project ([bd11d5f](https://github.com/codesweetly/react-image-grid-gallery/commit/bd11d5fdedd36d33079bd6936041f6eca49cd26b))
* Make 'ImageGallery.js' the entry point ([14451d6](https://github.com/codesweetly/react-image-grid-gallery/commit/14451d664b7934364c7d9d5e37b0c04b20014804))
* **package-json:** Install packages for compiling React to JavaScript ([56cd72d](https://github.com/codesweetly/react-image-grid-gallery/commit/56cd72d0d8354b2d6017a9bd2b71a3854226e912))
* Provide info that helps people discover the package ([bf581de](https://github.com/codesweetly/react-image-grid-gallery/commit/bf581deb46c5e890a78e6da8d19cb9e7a289f957))
* **release-it:** Customize changelog's headings ([00943c8](https://github.com/codesweetly/react-image-grid-gallery/commit/00943c89ce7d9246ac8ab9aa71fc61eba77f41eb))
* **release-it:** Install version management plugin ([abfc611](https://github.com/codesweetly/react-image-grid-gallery/commit/abfc611be693890781a28d91a5d6ae5604c365c2))
* **release-it:** Let release-it auto-generate project's changelog ([8f12b98](https://github.com/codesweetly/react-image-grid-gallery/commit/8f12b98ffe81d4a073cdeeafb30785f0747d761e))
* **release-it:** Specify options to override ([bf58eee](https://github.com/codesweetly/react-image-grid-gallery/commit/bf58eee97895fc29207e1333f5c6d09692f79eee))
* **release-it:** Use plugin to provide recommended bump to release-it ([ebd37a4](https://github.com/codesweetly/react-image-grid-gallery/commit/ebd37a4b9f1e61e41f33ffd8c0be8ee124dfa986))
* **typescript:** Define declaration file's location ([589842f](https://github.com/codesweetly/react-image-grid-gallery/commit/589842f62acef66338ca0d272bd255f9f7086415))
* Update changelog sections ([8763812](https://github.com/codesweetly/react-image-grid-gallery/commit/87638120ba6defe64ca15a57509dc6466bb01c64))
