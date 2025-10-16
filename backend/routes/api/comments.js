/**
 * Express router providing API endpoints for Comment resources.
 *
 * Routes:
 *   GET /api/comments
 *     - Description: Retrieve a list of comments, optionally filtered by
 *       query parameters. Results are returned sorted by `createdAt` in
 *       descending order.
 *     - Query Parameters: Any Comment model field may be provided as a
 *       filter (e.g. ?postId=... or ?author=...). If no query parameters
 *       are provided, all comments are returned.
 *     - Response: 200 JSON array of comment objects (lean documents).
 *     - Errors:
 *         500 Internal Server Error - forwarded to error handler on failure.
 *
 *   DELETE /api/comments/:id
 *     - Description: Delete a comment by its MongoDB ObjectId.
 *     - Path Parameters:
 *         @param {string} id - The ObjectId of the comment to delete.
 *     - Response:
 *         200 JSON { success: true, id } on successful deletion.
 *         404 JSON { message: "Comment not found" } if no document exists
 *             for the given id.
 *     - Errors:
 *         400 Invalid comment id - forwarded to error handler when id is not
 *             a valid MongoDB ObjectId (error.status = 400).
 *         500 Internal Server Error - forwarded to error handler on failure.
 *
 * Notes:
 *   - This module expects a Mongoose model named "Comment" to be registered
 *     on the mongoose instance.
 *   - Handlers use async/await and forward unexpected errors to Express'
 *     next(err) for centralized error handling.
 *
 * Exports:
 *   - {Router} router - An Express router mounting the described routes.
 *
 * @module routes/api/comments
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

router.get("/", async (req, res, next) => {
    try {
        const filter = Object.keys(req.query).length ? req.query : {};
        const comments = await Comment.find(filter).sort({ createdAt: -1 }).lean();
        res.json(comments);
    } catch (err) {
        next(err);
    }
});

// delete a comment
router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            const err = new Error("Invalid comment id");
            err.status = 400;
            return next(err);
        }
        const comment = await Comment.findByIdAndDelete(id).lean();
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        res.json({ success: true, id });
    } catch (err) {
        next(err);
    }
});