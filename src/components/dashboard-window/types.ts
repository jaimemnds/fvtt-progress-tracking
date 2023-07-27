import { v4 as uuidv4 } from "uuid";

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export interface DashboardWindowAttributes {
  trackTemplates: ProgressTrackTemplate[];
  entities: ProgressEntity[];
  displayMode: "cards" | "table";
}

export class DashboardWindowData implements DashboardWindowAttributes {
  trackTemplates: ProgressTrackTemplate[];
  entities: ProgressEntity[];
  displayMode: "cards" | "table";

  constructor(data: Partial<DashboardWindowAttributes>) {
    this.trackTemplates = data.trackTemplates || [];
    this.entities = data.entities || [];
    this.displayMode = data.displayMode || "cards";
  }

  public getTrackTemplate(
    templateId: string
  ): ProgressTrackTemplate | undefined {
    return this.trackTemplates.find((template) => template.id === templateId);
  }

  public getEntity(entityId: string): ProgressEntity | undefined {
    return this.entities.find((entity) => entity.id === entityId);
  }

  public getEntityTrack(
    entityId: string,
    trackId: string
  ): EntityProgressTrack | undefined {
    const entity = this.getEntity(entityId);
    if (!entity) return undefined;
    return entity.getTrack(trackId);
  }

  public getEntityTrackTemplate(
    entityId: string,
    trackId: string
  ): ProgressTrackTemplate | undefined {
    const track = this.getEntityTrack(entityId, trackId);
    if (!track) return undefined;
    return track.trackTemplate;
  }

  public createTrackTemplate() {
    this.trackTemplates.push(new ProgressTrackTemplate());
  }
}

//// PROGRESS TRACK TEMPLATE ////

interface ProgressTrackTemplateAttributes {
  id: string;
  type: "checkbox";
  name: string;
}

export class ProgressTrackTemplate implements ProgressTrackTemplateAttributes {
  id: string;
  type: "checkbox";
  name: string;

  constructor(data?: Partial<ProgressTrackTemplateAttributes>) {
    this.id = data?.id || uuidv4();
    this.type = data?.type || "checkbox";
    this.name = data?.name || "New Template";
  }
}

//// ENTITY ////

interface ProgressEntityAttributes {
  id: string;
  tracks: EntityProgressTrack[];
  name: string;
}

export class ProgressEntity implements ProgressEntityAttributes {
  id: string;
  tracks: EntityProgressTrack[];
  name: string;

  constructor(data?: Partial<ProgressEntityAttributes>) {
    this.id = data?.id || uuidv4();
    this.name = data?.name || "New Entity";
    this.tracks = data?.tracks || [];
  }

  public getTrack(trackId: string): EntityProgressTrack | undefined {
    return this.tracks.find((track) => track.id === trackId);
  }
}

//// ENTITY PROGRESS TRACK ////

interface EntityProgressTrackAttributes {
  id: string;
  trackTemplate: ProgressTrackTemplate;
  maxLevel: number;
  currentLevel: number;
}

export class EntityProgressTrack implements EntityProgressTrackAttributes {
  id: string;
  trackTemplate: ProgressTrackTemplate;
  maxLevel: number;
  currentLevel: number;

  constructor(
    data: Optional<
      EntityProgressTrackAttributes,
      "id" | "currentLevel" | "maxLevel"
    >
  ) {
    this.id = data.id || uuidv4();
    this.trackTemplate = data.trackTemplate;
    this.maxLevel = data.maxLevel || 5;
    this.currentLevel = data.currentLevel || 0;
  }
}
