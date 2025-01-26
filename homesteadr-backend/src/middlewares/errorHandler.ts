import { NextFunction, Request, Response } from "express";

const notFoundHandler= (req:Request,res:Response, next:NextFunction) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
}

const errorHandler = (err:any, _req:Request, res:Response, _next:NextFunction) => {

    let statusCode = res.statusCode === 200 ? 500 : res.statusCode
    let message = err.message

    res.status(statusCode).json({
        message, 
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,

    })
}

export { notFoundHandler, errorHandler }