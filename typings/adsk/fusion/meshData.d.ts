// /*global console*/
// /*global define*/
// /*global window*/
// /*jslint vars: true, nomen: true, plusplus: true*/

// (function (root, factory) {

//     'use strict';

//     if (typeof define === 'function' && define.amd) {
//         // using require.js
//         define(['./application.js'], factory);
//     } else {
//         root.adsk = factory(root.adsk);
//     }
// }(this, function (adsk) {

//     'use strict';

//     if (adsk === undefined) {
//         adsk = {
//             objectTypes: {}
//         };
//     }
//     if (adsk.fusion === undefined) {
//         adsk.fusion = {};
//     }

//     //=========== MeshManager ============
//     // Provides access to meshes that approximate a B-Rep and T-Spline.
//     adsk.fusion.MeshManager = function MeshManager(handle) {
//         if (!(this instanceof adsk.fusion.MeshManager)) {
//             return adsk.fusion.MeshManager.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.MeshManager.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.MeshManager.prototype.constructor = adsk.fusion.MeshManager;
//     adsk.fusion.MeshManager.interfaceId = 'adsk.fusion.MeshManager';
//     adsk.objectTypes['adsk.fusion.MeshManager'] = adsk.fusion.MeshManager;
//     adsk.fusion.MeshManager.cast = function (object) {
//         return object instanceof adsk.fusion.MeshManager ? object : null;
//     };

//     // Returns a collection that provides access to all of the
//     // existing display meshes.
//     Object.defineProperty(adsk.fusion.MeshManager.prototype, 'displayMeshes', {
//         get : function () {
//             var result = this._execute('displayMeshes');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TriangleMeshList) : null;
//         }
//     });

//     // Returns the parent BRepBody, BRepFace, BRepLump, BRepShell, SculptBody, or SculptFace object.
//     Object.defineProperty(adsk.fusion.MeshManager.prototype, 'parent', {
//         get : function () {
//             var result = this._execute('parent');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Base) : null;
//         }
//     });

//     // Creates a new MeshCalculator which is used to calculate
//     // new triangular meshes based on various parameters that control the calculation.
//     // Returns the new MeshCalculator object or null if the creation failed.
//     adsk.fusion.MeshManager.prototype.createMeshCalculator = function () {
//         var result = this._execute('createMeshCalculator');
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TriangleMeshCalculator) : null;
//     };

//     //=========== PolygonMesh ============
//     // The PolygonMesh represents a mesh that can contain any
//     // combination of polygons, quads, and triangles.
//     adsk.fusion.PolygonMesh = function PolygonMesh(handle) {
//         if (!(this instanceof adsk.fusion.PolygonMesh)) {
//             return adsk.fusion.PolygonMesh.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.PolygonMesh.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.PolygonMesh.prototype.constructor = adsk.fusion.PolygonMesh;
//     adsk.fusion.PolygonMesh.interfaceId = 'adsk.fusion.PolygonMesh';
//     adsk.objectTypes['adsk.fusion.PolygonMesh'] = adsk.fusion.PolygonMesh;
//     adsk.fusion.PolygonMesh.cast = function (object) {
//         return object instanceof adsk.fusion.PolygonMesh ? object : null;
//     };

//     // Returns the number of nodes in the mesh.
//     Object.defineProperty(adsk.fusion.PolygonMesh.prototype, 'nodeCount', {
//         get : function () {
//             var result = this._execute('nodeCount');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the node coordinates as an array of doubles where
//     // they are the x, y, z components of each coordinate.
//     Object.defineProperty(adsk.fusion.PolygonMesh.prototype, 'nodeCoordinatesAsDouble', {
//         get : function () {
//             var result = this._execute('nodeCoordinatesAsDouble');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the node coordinates as an array of floats where
//     // they are the x, y, z components of each coordinate.
//     Object.defineProperty(adsk.fusion.PolygonMesh.prototype, 'nodeCoordinatesAsFloat', {
//         get : function () {
//             var result = this._execute('nodeCoordinatesAsFloat');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the node coordinates as an array of Point3D objects.
//     Object.defineProperty(adsk.fusion.PolygonMesh.prototype, 'nodeCoordinates', {
//         get : function () {
//             var result = this._execute('nodeCoordinates');
//             if (!result || !Array.isArray(result.value)) {
//                 return undefined
//             }
//             var resultIter;
//             var resultValue = [];
//             for (resultIter = 0; resultIter < result.value.length; ++resultIter) {
//                 resultValue[resultIter] = (result.value[resultIter] !== undefined) ? adsk.createObject(result.value[resultIter], adsk.core.Point3D) : null;
//             }
//             return resultValue
//         }
//     });

//     // Returns the number of triangles in the mesh.
//     Object.defineProperty(adsk.fusion.PolygonMesh.prototype, 'triangleCount', {
//         get : function () {
//             var result = this._execute('triangleCount');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the number of quads in the mesh.
//     Object.defineProperty(adsk.fusion.PolygonMesh.prototype, 'quadCount', {
//         get : function () {
//             var result = this._execute('quadCount');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the number of polygons (more than 4 sides) in the mesh.
//     Object.defineProperty(adsk.fusion.PolygonMesh.prototype, 'polygonCount', {
//         get : function () {
//             var result = this._execute('polygonCount');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the normal vectors as an array of doubles where
//     // they are the x, y, z components of each vector. There is one normal vector for each index.
//     Object.defineProperty(adsk.fusion.PolygonMesh.prototype, 'normalVectorsAsDouble', {
//         get : function () {
//             var result = this._execute('normalVectorsAsDouble');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the normal vectors as an array of floats. There is one normal vector for each index.
//     Object.defineProperty(adsk.fusion.PolygonMesh.prototype, 'normalVectorsAsFloat', {
//         get : function () {
//             var result = this._execute('normalVectorsAsFloat');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the normal vectors as an array of Vector 3D objects. There is one normal vector for each index.
//     Object.defineProperty(adsk.fusion.PolygonMesh.prototype, 'normalVectors', {
//         get : function () {
//             var result = this._execute('normalVectors');
//             if (!result || !Array.isArray(result.value)) {
//                 return undefined
//             }
//             var resultIter;
//             var resultValue = [];
//             for (resultIter = 0; resultIter < result.value.length; ++resultIter) {
//                 resultValue[resultIter] = (result.value[resultIter] !== undefined) ? adsk.createObject(result.value[resultIter], adsk.core.Vector3D) : null;
//             }
//             return resultValue
//         }
//     });

//     // Returns the index values that index into the NodeCoordinates and NormalVectors arrays to
//     // define the three coordinates of each triangle and the corresponding normal.
//     Object.defineProperty(adsk.fusion.PolygonMesh.prototype, 'triangleNodeIndices', {
//         get : function () {
//             var result = this._execute('triangleNodeIndices');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the index values that index into the NodeCoordinates and NormalVectors arrays to
//     // define the four coordinates of each quad and the corresponding normal.
//     Object.defineProperty(adsk.fusion.PolygonMesh.prototype, 'quadNodeIndices', {
//         get : function () {
//             var result = this._execute('quadNodeIndices');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the index values that index into the NodeCoordinates and NormalVectors arrays to
//     // define the coordinates of each polygon and the corresponding normal.
//     Object.defineProperty(adsk.fusion.PolygonMesh.prototype, 'polygonNodeIndices', {
//         get : function () {
//             var result = this._execute('polygonNodeIndices');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the number of nodes that define each polygon. For example,
//     // if NodeCountPerPolygon[0] returns 6 it indicates the first polygon
//     // is defined using 6 nodes. The first six indices returned by the
//     // PolygonNodeIndices properties provide the look-up into the NodeCoordinates
//     // array.
//     Object.defineProperty(adsk.fusion.PolygonMesh.prototype, 'nodeCountPerPolygon', {
//         get : function () {
//             var result = this._execute('nodeCountPerPolygon');
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== TextureImage ============
//     // Provides access to the image data associated with a texture map.
//     adsk.fusion.TextureImage = function TextureImage(handle) {
//         if (!(this instanceof adsk.fusion.TextureImage)) {
//             return adsk.fusion.TextureImage.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.TextureImage.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.TextureImage.prototype.constructor = adsk.fusion.TextureImage;
//     adsk.fusion.TextureImage.interfaceId = 'adsk.fusion.TextureImage';
//     adsk.objectTypes['adsk.fusion.TextureImage'] = adsk.fusion.TextureImage;
//     adsk.fusion.TextureImage.cast = function (object) {
//         return object instanceof adsk.fusion.TextureImage ? object : null;
//     };

//     // The transform of the texture image in parametric space.
//     Object.defineProperty(adsk.fusion.TextureImage.prototype, 'transform', {
//         get : function () {
//             var result = this._execute('transform');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.core.Matrix2D) : null;
//         }
//     });

//     //=========== TriangleMesh ============
//     // The TriangleMesh object represents all of the data defining
//     // a triangular mesh.
//     adsk.fusion.TriangleMesh = function TriangleMesh(handle) {
//         if (!(this instanceof adsk.fusion.TriangleMesh)) {
//             return adsk.fusion.TriangleMesh.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.TriangleMesh.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.TriangleMesh.prototype.constructor = adsk.fusion.TriangleMesh;
//     adsk.fusion.TriangleMesh.interfaceId = 'adsk.fusion.TriangleMesh';
//     adsk.objectTypes['adsk.fusion.TriangleMesh'] = adsk.fusion.TriangleMesh;
//     adsk.fusion.TriangleMesh.cast = function (object) {
//         return object instanceof adsk.fusion.TriangleMesh ? object : null;
//     };

//     // Returns the total number of nodes in the mesh.
//     Object.defineProperty(adsk.fusion.TriangleMesh.prototype, 'nodeCount', {
//         get : function () {
//             var result = this._execute('nodeCount');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the node coordinates as an array of doubles where
//     // they are the x, y, z components of each coordinate.
//     Object.defineProperty(adsk.fusion.TriangleMesh.prototype, 'nodeCoordinatesAsDouble', {
//         get : function () {
//             var result = this._execute('nodeCoordinatesAsDouble');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the node coordinates as an array of floats where
//     // they are the x, y, z components of each coordinate.
//     Object.defineProperty(adsk.fusion.TriangleMesh.prototype, 'nodeCoordinatesAsFloat', {
//         get : function () {
//             var result = this._execute('nodeCoordinatesAsFloat');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the node coordinates as an array of Point3D objects.
//     Object.defineProperty(adsk.fusion.TriangleMesh.prototype, 'nodeCoordinates', {
//         get : function () {
//             var result = this._execute('nodeCoordinates');
//             if (!result || !Array.isArray(result.value)) {
//                 return undefined
//             }
//             var resultIter;
//             var resultValue = [];
//             for (resultIter = 0; resultIter < result.value.length; ++resultIter) {
//                 resultValue[resultIter] = (result.value[resultIter] !== undefined) ? adsk.createObject(result.value[resultIter], adsk.core.Point3D) : null;
//             }
//             return resultValue
//         }
//     });

//     // Returns the number of triangles in the mesh.
//     Object.defineProperty(adsk.fusion.TriangleMesh.prototype, 'triangleCount', {
//         get : function () {
//             var result = this._execute('triangleCount');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the normal vectors of the mesh where there is a normal
//     // vector at each node. The normals are returned as an array
//     // of doubles where they are the x, y, z components of each vector.
//     Object.defineProperty(adsk.fusion.TriangleMesh.prototype, 'normalVectorsAsDouble', {
//         get : function () {
//             var result = this._execute('normalVectorsAsDouble');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the normal vectors of the mesh where there is a normal
//     // vector at each node. The normals are returned as an array
//     // of floats where they are the x, y, z components of each vector.
//     Object.defineProperty(adsk.fusion.TriangleMesh.prototype, 'normalVectorsAsFloat', {
//         get : function () {
//             var result = this._execute('normalVectorsAsFloat');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the normal vectors of the mesh where there is a normal
//     // vector at each node. The normals are returned as an array
//     // of Vector3D objects.
//     Object.defineProperty(adsk.fusion.TriangleMesh.prototype, 'normalVectors', {
//         get : function () {
//             var result = this._execute('normalVectors');
//             if (!result || !Array.isArray(result.value)) {
//                 return undefined
//             }
//             var resultIter;
//             var resultValue = [];
//             for (resultIter = 0; resultIter < result.value.length; ++resultIter) {
//                 resultValue[resultIter] = (result.value[resultIter] !== undefined) ? adsk.createObject(result.value[resultIter], adsk.core.Vector3D) : null;
//             }
//             return resultValue
//         }
//     });

//     // Returns an array of indices that define which nodes are used
//     // for each triangle. This is used to look-up the coordinates in the
//     // NodeCoordinates array to get the three coordinates of each triangle.
//     Object.defineProperty(adsk.fusion.TriangleMesh.prototype, 'nodeIndices', {
//         get : function () {
//             var result = this._execute('nodeIndices');
//             return result ? result.value : undefined;
//         }
//     });

//     // Indicates if the associated face has an image based texture. This can only
//     // return true when this TriangleMesh object was obtained from a BRepFace object.
//     // If false, the TextureCoordinates and TextureMap properties should be ignored.
//     // A texture is returned by a face when an appearance has been applied
//     // that has an associated image based texture.
//     Object.defineProperty(adsk.fusion.TriangleMesh.prototype, 'hasTexture', {
//         get : function () {
//             var result = this._execute('hasTexture');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the texture coordinates used when mapping a texture to
//     // this face. The coordinates are returned as an array of
//     // doubles where they are the u and v components of each
//     // coordinate as defined in parametric space. There is a texture
//     // coordinate for each vertex in the face mesh.
//     Object.defineProperty(adsk.fusion.TriangleMesh.prototype, 'textureCoordinatesAsDouble', {
//         get : function () {
//             var result = this._execute('textureCoordinatesAsDouble');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the texture coordinates used when mapping a texture to
//     // this face. The coordinates are returned as an array of
//     // floats where they are the u and v components of each
//     // coordinate as defined in parametric space. There is a texture
//     // coordinate for each vertex in the face mesh.
//     Object.defineProperty(adsk.fusion.TriangleMesh.prototype, 'textureCoordinatesAsFloat', {
//         get : function () {
//             var result = this._execute('textureCoordinatesAsFloat');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the texture coordinates used when mapping a texture to
//     // this face. The coordinates are returned as an array of
//     // Point2D objects where the x and y properties of the point are
//     // u and v coordinates as defined in parametric space. There is
//     // a texture coordinate for each vertex in the face mesh.
//     Object.defineProperty(adsk.fusion.TriangleMesh.prototype, 'textureCoordinates', {
//         get : function () {
//             var result = this._execute('textureCoordinates');
//             if (!result || !Array.isArray(result.value)) {
//                 return undefined
//             }
//             var resultIter;
//             var resultValue = [];
//             for (resultIter = 0; resultIter < result.value.length; ++resultIter) {
//                 resultValue[resultIter] = (result.value[resultIter] !== undefined) ? adsk.createObject(result.value[resultIter], adsk.core.Point2D) : null;
//             }
//             return resultValue
//         }
//     });

//     // Returns the texture image associated with the texture.
//     Object.defineProperty(adsk.fusion.TriangleMesh.prototype, 'textureImage', {
//         get : function () {
//             var result = this._execute('textureImage');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TextureImage) : null;
//         }
//     });

//     // Returns the surface tolerance that was used to generate this mesh.
//     // This is most useful when using display meshes that have already
//     // been calculated.
//     Object.defineProperty(adsk.fusion.TriangleMesh.prototype, 'surfaceTolerance', {
//         get : function () {
//             var result = this._execute('surfaceTolerance');
//             return result ? result.value : undefined;
//         }
//     });

//     //=========== TriangleMeshCalculator ============
//     // Used to calculate new meshes for a B-Rep or T-Spline using defined criteria.
//     adsk.fusion.TriangleMeshCalculator = function TriangleMeshCalculator(handle) {
//         if (!(this instanceof adsk.fusion.TriangleMeshCalculator)) {
//             return adsk.fusion.TriangleMeshCalculator.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.TriangleMeshCalculator.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.TriangleMeshCalculator.prototype.constructor = adsk.fusion.TriangleMeshCalculator;
//     adsk.fusion.TriangleMeshCalculator.interfaceId = 'adsk.fusion.TriangleMeshCalculator';
//     adsk.objectTypes['adsk.fusion.TriangleMeshCalculator'] = adsk.fusion.TriangleMeshCalculator;
//     adsk.fusion.TriangleMeshCalculator.cast = function (object) {
//         return object instanceof adsk.fusion.TriangleMeshCalculator ? object : null;
//     };

//     // Specifies the maximum distance that the mesh can deviate from the smooth surface.
//     // The value is in centimeters. Smaller values can result in a much greater number
//     // of facets being returned and will require more processing time to calculate.
//     Object.defineProperty(adsk.fusion.TriangleMeshCalculator.prototype, 'surfaceTolerance', {
//         get : function () {
//             var result = this._execute('surfaceTolerance');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('surfaceTolerance', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Specifies the maximum side of any triangle in the mesh. A value of 0 (the default)
//     // indicates that no maximum length is specified. The value is specified in centimeters.
//     Object.defineProperty(adsk.fusion.TriangleMeshCalculator.prototype, 'maxSideLength', {
//         get : function () {
//             var result = this._execute('maxSideLength');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('maxSideLength', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Specifies the maximum length to height ratio that a triangle can have.
//     // This helps to avoid long skinny triangles. A value of 0 (the default)
//     // indicates that no maximum aspect ratio is specified.
//     Object.defineProperty(adsk.fusion.TriangleMeshCalculator.prototype, 'maxAspectRatio', {
//         get : function () {
//             var result = this._execute('maxAspectRatio');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('maxAspectRatio', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Specifies the maximum deviation between adjacent vertex normals.
//     // This value is the maximum angle allowed between normals and is
//     // specified in radians. A value of 0 (the default) indicates that no normal deviation is specified.
//     Object.defineProperty(adsk.fusion.TriangleMeshCalculator.prototype, 'maxNormalDeviation', {
//         get : function () {
//             var result = this._execute('maxNormalDeviation');
//             return result ? result.value : undefined;
//         },
//         set : function (value) {
//             if (!isFinite(value)) { throw new TypeError('value must be a number'); }
//             var args = {
//                 value : Number(value)
//             };
//             var result = this._execute('maxNormalDeviation', args);
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the parent MeshManager object.
//     Object.defineProperty(adsk.fusion.TriangleMeshCalculator.prototype, 'parentMeshManager', {
//         get : function () {
//             var result = this._execute('parentMeshManager');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.MeshManager) : null;
//         }
//     });

//     // This is a simplified way to set the various settings that control the resulting mesh. When used it automatically
//     // adjusts all of the property values appropriately. It does this for the given geometry by computing its bounding
//     // box diameter. Then the surface tolerance is calculated as shown below where the meshLOD is the "Level of Detail" and
//     // is described in more detail below. The diameter is the bounding box diameter.
//     // double nodeApproximateSize = std::pow(2.0, meshLOD);
//     // double fracTol = 1.0 / nodeApproximateSize;
//     // surfaceTolerance = fracTol * diameter;
//     // triangleMeshQuality : The mesh quality is specified by using an item from the enum list where the following items result
//     // in a corresponding mesh LOD that's used in the equation above.
//     // LowQualityTriangleMesh: 8
//     // NormalQualityTriangleMesh: 11
//     // HighQualityTriangleMesh: 13
//     // VeryHighQualityTriangleMesh: 15
//     // Returns true if setting the quality was successful.
//     adsk.fusion.TriangleMeshCalculator.prototype.setQuality = function (triangleMeshQuality) {
//         if (!isFinite(triangleMeshQuality)) { throw new TypeError('triangleMeshQuality must be a number'); }
//         var args = {
//             triangleMeshQuality : Number(triangleMeshQuality)
//         };
//         var result = this._execute('setQuality', args);
//         return result ? result.value : undefined;
//     };

//     // Calculates a new triangle mesh based on the current settings.
//     // Returns the new TriangleMesh object or null in the case where the calculation failed.
//     adsk.fusion.TriangleMeshCalculator.prototype.calculate = function () {
//         var result = this._execute('calculate');
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TriangleMesh) : null;
//     };

//     //=========== TriangleMeshList ============
//     // Provides access to a set of triangle meshes.
//     adsk.fusion.TriangleMeshList = function TriangleMeshList(handle) {
//         if (!(this instanceof adsk.fusion.TriangleMeshList)) {
//             return adsk.fusion.TriangleMeshList.cast(handle);
//         }
//         adsk.core.Base.call(this, handle);
//     };
//     adsk.fusion.TriangleMeshList.prototype = Object.create(adsk.core.Base.prototype);
//     adsk.fusion.TriangleMeshList.prototype.constructor = adsk.fusion.TriangleMeshList;
//     adsk.fusion.TriangleMeshList.interfaceId = 'adsk.fusion.TriangleMeshList';
//     adsk.objectTypes['adsk.fusion.TriangleMeshList'] = adsk.fusion.TriangleMeshList;
//     adsk.fusion.TriangleMeshList.cast = function (object) {
//         return object instanceof adsk.fusion.TriangleMeshList ? object : null;
//     };

//     // Returns the mesh with the tightest surface tolerance. This can return null
//     // in the case the list is empty, ie. Count is 0.
//     Object.defineProperty(adsk.fusion.TriangleMeshList.prototype, 'bestMesh', {
//         get : function () {
//             var result = this._execute('bestMesh');
//             return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TriangleMesh) : null;
//         }
//     });

//     // Returns the number of meshes in the collection.
//     Object.defineProperty(adsk.fusion.TriangleMeshList.prototype, 'count', {
//         get : function () {
//             var result = this._execute('count');
//             return result ? result.value : undefined;
//         }
//     });

//     // Returns the specified triangle meshes.
//     // index : The index of the mesh to return where the first item has an index of 0.
//     // Returns the specified mesh or null in the case of invalid index.
//     adsk.fusion.TriangleMeshList.prototype.item = function (index) {
//         if (!isFinite(index)) { throw new TypeError('index must be a number'); }
//         var args = {
//             index : Number(index)
//         };
//         var result = this._execute('item', args);
//         return (result && result.value) ? adsk.createObject(result.value, adsk.fusion.TriangleMesh) : null;
//     };

//     //=========== TriangleMeshQualityOptions ============
//     // Types that indicate the level of quality of a triangle mesh.
//     adsk.fusion.TriangleMeshQualityOptions = {
//         LowQualityTriangleMesh : 8,
//         NormalQualityTriangleMesh : 11,
//         HighQualityTriangleMesh : 13,
//         VeryHighQualityTriangleMesh : 15
//     };

//     return adsk;
// }));