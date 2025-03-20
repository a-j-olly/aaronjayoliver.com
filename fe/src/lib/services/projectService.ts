import projectData from '$lib/data/projects.json';
import tagData from '$lib/data/tags.json';
import { getProjectImage, getTagImage } from './imageService';
import type { ProjectDetail, ProjectItem, ProjectJson, TagDetail, TagItem } from 'shared_types';

// Pure functions for data transformation (no state)

/**
 * Get basic tag information from a tag ID
 */
export function getTagItem(tagId: string): TagItem {
  const tag = tagData.find(t => t.id === tagId);
  if (!tag) throw new Error(`Tag with id ${tagId} not found`);
  
  return {
    id: tag.id,
    name: tag.name
  };
}

/**
 * Get detailed tag information from a tag ID
 */
export function getTagDetail(tagId: string): TagDetail {
  const tag = tagData.find(t => t.id === tagId);
  if (!tag) throw new Error(`Tag with id ${tagId} not found`);
  
  return {
    id: tag.id,
    name: tag.name,
    url: tag.url,
    image: getTagImage(tag.image)
  };
}

/**
 * Get multiple tag items from an array of tag IDs
 */
export function getTagItems(tagIds: string[]): TagItem[] {
  return tagIds.map(id => getTagItem(id));
}

/**
 * Get multiple tag details from an array of tag IDs
 */
export function getTagDetails(tagIds: string[]): TagDetail[] {
  return tagIds.map(id => getTagDetail(id));
}

/**
 * Convert a raw project JSON to a ProjectItem with basic tag info
 */
export function getProjectItem(projectJson: ProjectJson): ProjectItem {
  return {
    id: projectJson.id,
    name: projectJson.name,
    description: projectJson.description,
    slug: projectJson.slug,
    releaseDate: projectJson.releaseDate,
    updatedDate: projectJson.updatedDate,
    image: getProjectImage(projectJson.image),
    repositoryURL: projectJson.repositoryURL,
    presentationURL: projectJson.presentationURL,
    tags: getTagItems(projectJson.tagIds)
  };
}

/**
 * Convert a raw project JSON to a ProjectDetail with full tag details
 */
export function getProjectDetail(projectJson: ProjectJson): ProjectDetail {
  return {
    ...getProjectItem(projectJson),
    tags: getTagDetails(projectJson.tagIds)
  };
}

/**
 * Get all projects as ProjectItems
 */
export function getAllProjectItems(): ProjectItem[] {
  return projectData.map(project => getProjectItem(project));
}

/**
 * Get all projects as ProjectDetails
 */
export function getAllProjectDetails(): ProjectDetail[] {
  return projectData.map(project => getProjectDetail(project));
}

/**
 * Find a project by its slug
 */
export function findProjectBySlug(slug: string): ProjectDetail | undefined {
  const project = projectData.find(p => p.slug === slug);
  return project ? getProjectDetail(project) : undefined;
}

/**
 * Filter projects by tags - returns only projects that have ALL the specified tags
 */
export function filterProjectsByTags(tagIds: string[]): ProjectDetail[] {
  if (tagIds.length === 0) return getAllProjectDetails();
  
  return projectData
    .filter(project => tagIds.every(id => project.tagIds.includes(id)))
    .map(project => getProjectDetail(project));
}

/**
 * Get all available tags as TagDetail objects
 */
export function getAllTags(): TagDetail[] {
  return tagData.map(tag => ({
    id: tag.id,
    name: tag.name,
    url: tag.url,
    image: getTagImage(tag.image)
  }));
}