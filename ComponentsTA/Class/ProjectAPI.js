import React from "react";
import Project from "./Project";
import ProjectPromo from "./ProjectPromo";
const baseURL = "http://localhost:4000"
const url = `${baseURL}/recipes`;
const urlP = `${baseURL}/promo`;

const translateStatusToErrorMessage = (status) => {
  switch (status) {
    case 401:
      return `Please login again`
      break;
    case 403:
      return `You dont have a permission to view the project`
      break;
    default:
      return `There was an error retrieving the projects. Please try again`
  }
}

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    const httpErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url
    }
    console.log(`log server http error : ${JSON.stringify(httpErrorInfo)}`);

    let errorMsg = translateStatusToErrorMessage(httpErrorInfo.status)
    throw new Error(errorMsg)
  }
}

const parseJSON = (response) => {
  return response.json()
}

const delay = (ms) => {
  return (x) => {
    return new Promise(resolve => setTimeout(() => resolve(x), ms))
  }
}

const convertToProjectModels = (data) => {
  let projects = data.map(convertToProjectModel)
  return projects
}

const convertToProjectModel = (item) => {
  return new Project(item);
}
const convertToProjectModelsPromo = (data) => {
  let projects = data.map(convertToProjectModelPromo)
  return projects
}

const convertToProjectModelPromo = (item) => {
  return new ProjectPromo(item);
}

const projectAPI = {
  get(page = 1, limit = 3) {
    return fetch(`${url}?_page=${page}&_limit=${limit}&_sort=rating:asc`).then(delay(600)).then(checkStatus).then(parseJSON).then(convertToProjectModels).catch((error) => {
      console.log(`Log clien error ${error}`);
      throw new Error(
        `There was an error retrieving the projects. Please try again`
      )
    })
  },
  getPromo() {
    return fetch(`${urlP}?_sort=title:asc`).then(delay(600)).then(checkStatus).then(parseJSON).then(convertToProjectModelsPromo).catch((error) => {
      console.log(`Log clien error ${error}`);
      throw new Error(
        `There was an error retrieving the projects. Please try again`
      )
    })
  },
  getMenu(page = 1, limit = 99) {
    return fetch(`${url}?_page=${page}&_limit=${limit}&_sort=name:asc`).then(delay(600)).then(checkStatus).then(parseJSON).then(convertToProjectModels).catch((error) => {
      console.log(`Log clien error ${error}`);
      throw new Error(
        `There was an error retrieving the projects. Please try again`
      )
    })
  },

  put(project) {
    return fetch(`${url}/${project.id}`, {
      method: "PUT",
      body: JSON.stringify(project),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(checkStatus).then(parseJSON).catch(error => {
      console.log("Log client error" + error);
      throw new Error(
        `There was an error updating the project. Please try again`
      )
    })
  },

  find(id) {
    return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON).then(convertToProjectModel)
  }
}

export { projectAPI };