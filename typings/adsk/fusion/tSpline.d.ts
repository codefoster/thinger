//=========== TSplineBodies ============
// A collection of TSpline bodies.
interface TSplineBodies {
    cast(object: Object): TSplineBodies;

    // The number of bodies in the collection.
    count: number;

    // Function that returns the specified T-Spline body using an index into the collection.
    // index : The index of the item within the collection to return. The first item in the collection has an index of 0.
    // Returns the specified item or null if an invalid index was specified.
    item(index: number): TSplineBody;
}

//=========== TSplineBody ============
// A TSpline body.
interface TSplineBody {
    cast(object: Object): TSplineBody;
}