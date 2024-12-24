import * as generalUtil from '../generalUtil';
import {logger} from 'global-input-logging';

// Key for localStorage
const STORAGE_KEY = 'DOMAIN_TO_IDS';

// Cached variable
let domainToIds = null;

// Helper function to save data to localStorage
function saveToLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    logger.error(`Error saving ${key} to localStorage`, e);
  }
}

// Helper function to load data from localStorage
function loadFromLocalStorage(key, defaultValue) {
  try {
    const value = localStorage.getItem(key);
    return value !== null ? JSON.parse(value) : defaultValue;
  } catch (e) {
    logger.error(`Error loading ${key} from localStorage`, e);
    return defaultValue;
  }
}

// Initialize cached variable
function initializeState() {
  if (domainToIds === null) {
    domainToIds = loadFromLocalStorage(STORAGE_KEY, []);
  }
}

// Call initializeState to set up the initial state
initializeState();

// Getter and setter functions
export const getAllDomainMappingRecords = () => domainToIds;

function setDomainToIds(value) {
  domainToIds = value;
  saveToLocalStorage(STORAGE_KEY, domainToIds);
}

// Transformer functions
export function attachToDomains(formId, domains) {
  let updatedDomainToIds = [];
  let domainsToAttach = [...domains];

  domainToIds.forEach((domainMapping) => {
    if (generalUtil.domainMappingMatchOneOf(domainMapping, domainsToAttach)) {
      // Domain matches one of the domains to attach
      if (generalUtil.domainHasFormId(domainMapping, formId)) {
        // Already attached
        updatedDomainToIds.push(domainMapping);
      } else {
        // Attach formId
        const formIds = [...domainMapping.formIds, formId];
        const newDomainFormMap = { ...domainMapping, formIds };
        updatedDomainToIds.push(newDomainFormMap);
      }
      // Remove domain from domainsToAttach
      domainsToAttach = domainsToAttach.filter(
        (d) => d !== domainMapping.domain
      );
    } else if (generalUtil.domainHasFormId(domainMapping, formId)) {
      // Should remove the mapping
      const formIds = domainMapping.formIds.filter((fid) => fid !== formId);
      if (formIds.length) {
        const newDomainFormMap = { ...domainMapping, formIds };
        updatedDomainToIds.push(newDomainFormMap);
      } else {
        logger.log('map is removed:' + domainMapping.domain);
      }
    } else {
      // Not changed
      updatedDomainToIds.push(domainMapping);
    }
  });

  // Add new domains that were not in domainToIds
  domainsToAttach.forEach((domain) => {
    const domainMapping = { domain, formIds: [formId] };
    updatedDomainToIds.push(domainMapping);
  });

  setDomainToIds(updatedDomainToIds);
}

function deleteFormId(formId) {
  let updatedDomainToIds = [];

  domainToIds.forEach((domainMapping) => {
    if (generalUtil.domainHasFormId(domainMapping, formId)) {
      // Remove the formId from the mapping
      const formIds = domainMapping.formIds.filter((fid) => fid !== formId);
      if (formIds.length) {
        const newDomainFormMap = { ...domainMapping, formIds };
        updatedDomainToIds.push(newDomainFormMap);
      } else {
        logger.log('map is removed:' + domainMapping.domain);
      }
    } else {
      // Not changed
      updatedDomainToIds.push(domainMapping);
    }
  });

  setDomainToIds(updatedDomainToIds);
}

function deleteAllMappings() {
  setDomainToIds([]);
}

function deleteADomain(domain) {
  const updatedDomainToIds = domainToIds.filter(
    (domainMapping) => domainMapping.domain !== domain
  );
  setDomainToIds(updatedDomainToIds);
}

// Exported functions
export const saveDomains = ({ formData }) => {
  const domains = generalUtil.buildDomainsFromFormData(formData);
  if (!domains) {
    return;
  }
  attachToDomains(formData.id, domains);
};

export const updateDomains = ({ formData, formId }) => {
  const domains = generalUtil.buildDomainsFromFormData(formData);
  if (!domains) {
    deleteFormId(formId);
    return;
  }
  if (formId === formData.id || !formId) {
    attachToDomains(formData.id, domains);
  } else {
    // Update attached domains
    deleteFormId(formId);
    attachToDomains(formData.id, domains);
  }
};

export const deleteFormData = ({ formData }) => {
  deleteFormId(formData.id);
};

export const deleteByFormId = ({ formId }) => {
  deleteFormId(formId);
};



export const deleteAllData = () => {
  deleteAllMappings();
};

// Synchronization across tabs
window.addEventListener('storage', (event) => {
  if (event.key === STORAGE_KEY) {
    domainToIds = event.newValue ? JSON.parse(event.newValue) : [];
  }
});