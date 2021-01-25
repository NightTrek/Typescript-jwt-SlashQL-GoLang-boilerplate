export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The DateTime scalar type represents date and time as a string in RFC3339 format.
   * For example: "1985-04-12T23:20:50.52Z" represents 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC.
   */
  DateTime: any;
  /**
   * The Int64 scalar type represents a signed 64‐bit numeric non‐fractional value.
   * Int64 can represent values in range [-(2^63),(2^63 - 1)].
   */
  Int64: any;
};














export type WithinFilter = {
  polygon: PolygonRef;
};

export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload';
  comment?: Maybe<Array<Maybe<Comment>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateCommentPayloadCommentArgs = {
  filter?: Maybe<CommentFilter>;
  order?: Maybe<CommentOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AddFollowingInput = {
  readingList: Array<Maybe<ReadingListRef>>;
  startedFollowingData: Scalars['DateTime'];
};

export type FollowingFilter = {
  fid?: Maybe<Array<Scalars['ID']>>;
  has?: Maybe<FollowingHasFilter>;
  and?: Maybe<Array<Maybe<FollowingFilter>>>;
  or?: Maybe<Array<Maybe<FollowingFilter>>>;
  not?: Maybe<FollowingFilter>;
};

export type PolygonGeoFilter = {
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
  contains?: Maybe<ContainsFilter>;
  intersects?: Maybe<IntersectsFilter>;
};

export type UpdateRatingPayload = {
  __typename?: 'UpdateRatingPayload';
  rating?: Maybe<Array<Maybe<Rating>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateRatingPayloadRatingArgs = {
  filter?: Maybe<RatingFilter>;
  order?: Maybe<RatingOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AddReadingListInput = {
  title: Scalars['String'];
  shortDescription: Scalars['String'];
  description: Scalars['String'];
  datePublished: Scalars['DateTime'];
  author: Array<Maybe<UserRef>>;
  isPublic: Scalars['Boolean'];
  isRestricted?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Array<TagsRef>>;
  posts?: Maybe<Array<PostRef>>;
  followers?: Maybe<Array<FollowingRef>>;
  rating?: Maybe<Array<RatingRef>>;
};

export type UpdateFollowingInput = {
  filter: FollowingFilter;
  set?: Maybe<FollowingPatch>;
  remove?: Maybe<FollowingPatch>;
};

export type User = {
  __typename?: 'User';
  UID: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  userName: Scalars['String'];
  email: Scalars['String'];
  readingLists?: Maybe<Array<ReadingList>>;
  posts?: Maybe<Array<Post>>;
  comments?: Maybe<Array<Comment>>;
  following?: Maybe<Array<Following>>;
  readingListsAggregate?: Maybe<ReadingListAggregateResult>;
  postsAggregate?: Maybe<PostAggregateResult>;
  commentsAggregate?: Maybe<CommentAggregateResult>;
  followingAggregate?: Maybe<FollowingAggregateResult>;
};


export type UserReadingListsArgs = {
  filter?: Maybe<ReadingListFilter>;
  order?: Maybe<ReadingListOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type UserPostsArgs = {
  filter?: Maybe<PostFilter>;
  order?: Maybe<PostOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type UserCommentsArgs = {
  filter?: Maybe<CommentFilter>;
  order?: Maybe<CommentOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type UserFollowingArgs = {
  filter?: Maybe<FollowingFilter>;
  order?: Maybe<FollowingOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type UserReadingListsAggregateArgs = {
  filter?: Maybe<ReadingListFilter>;
};


export type UserPostsAggregateArgs = {
  filter?: Maybe<PostFilter>;
};


export type UserCommentsAggregateArgs = {
  filter?: Maybe<CommentFilter>;
};


export type UserFollowingAggregateArgs = {
  filter?: Maybe<FollowingFilter>;
};

export type Following = {
  __typename?: 'Following';
  fid: Scalars['ID'];
  readingList: Array<Maybe<ReadingList>>;
  startedFollowingData: Scalars['DateTime'];
  readingListAggregate?: Maybe<ReadingListAggregateResult>;
};


export type FollowingReadingListArgs = {
  filter?: Maybe<ReadingListFilter>;
  order?: Maybe<ReadingListOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type FollowingReadingListAggregateArgs = {
  filter?: Maybe<ReadingListFilter>;
};

export type IntersectsFilter = {
  polygon?: Maybe<PolygonRef>;
  multiPolygon?: Maybe<MultiPolygonRef>;
};

export type FollowingPatch = {
  readingList?: Maybe<Array<Maybe<ReadingListRef>>>;
  startedFollowingData?: Maybe<Scalars['DateTime']>;
};

export type AddFollowingPayload = {
  __typename?: 'AddFollowingPayload';
  following?: Maybe<Array<Maybe<Following>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddFollowingPayloadFollowingArgs = {
  filter?: Maybe<FollowingFilter>;
  order?: Maybe<FollowingOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type DeletePostPayload = {
  __typename?: 'DeletePostPayload';
  post?: Maybe<Array<Maybe<Post>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeletePostPayloadPostArgs = {
  filter?: Maybe<PostFilter>;
  order?: Maybe<PostOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum CommentHasFilter {
  Text = 'text',
  Author = 'author',
  CommentsOn = 'commentsOn',
  Rating = 'rating'
}

export type RatingPatch = {
  truth?: Maybe<Scalars['Int']>;
  agreement?: Maybe<Scalars['Int']>;
  author?: Maybe<UserRef>;
  readingList?: Maybe<ReadingListRef>;
  post?: Maybe<PostRef>;
  comments?: Maybe<CommentRef>;
};

export type MultiPolygonRef = {
  polygons: Array<PolygonRef>;
};

export type AddUserInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  userName: Scalars['String'];
  email: Scalars['String'];
  readingLists?: Maybe<Array<ReadingListRef>>;
  posts?: Maybe<Array<PostRef>>;
  comments?: Maybe<Array<CommentRef>>;
  following?: Maybe<Array<FollowingRef>>;
};

export type PostFilter = {
  PID?: Maybe<Array<Scalars['ID']>>;
  title?: Maybe<StringTermFilter>;
  shortDescription?: Maybe<StringFullTextFilter>;
  description?: Maybe<StringFullTextFilter>;
  datePublished?: Maybe<DateTimeFilter>;
  has?: Maybe<PostHasFilter>;
  and?: Maybe<Array<Maybe<PostFilter>>>;
  or?: Maybe<Array<Maybe<PostFilter>>>;
  not?: Maybe<PostFilter>;
};

export type FloatRange = {
  min: Scalars['Float'];
  max: Scalars['Float'];
};

export enum UserHasFilter {
  FirstName = 'firstName',
  LastName = 'lastName',
  UserName = 'userName',
  Email = 'email',
  ReadingLists = 'readingLists',
  Posts = 'posts',
  Comments = 'comments',
  Following = 'following'
}

export type TagsRef = {
  TID?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<PostRef>>;
  readingLists?: Maybe<Array<ReadingListRef>>;
};

export type PointListRef = {
  points: Array<PointRef>;
};

export type AddCommentPayload = {
  __typename?: 'AddCommentPayload';
  comment?: Maybe<Array<Maybe<Comment>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddCommentPayloadCommentArgs = {
  filter?: Maybe<CommentFilter>;
  order?: Maybe<CommentOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum PostHasFilter {
  Title = 'title',
  Url = 'url',
  ShortDescription = 'shortDescription',
  Description = 'description',
  DatePublished = 'datePublished',
  Author = 'author',
  ReadingList = 'readingList',
  Comments = 'comments',
  Tags = 'tags',
  Rating = 'rating'
}

export type CommentRef = {
  CID?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  author?: Maybe<UserRef>;
  commentsOn?: Maybe<PostRef>;
  rating?: Maybe<Array<Maybe<RatingRef>>>;
};

export type UpdateCommentInput = {
  filter: CommentFilter;
  set?: Maybe<CommentPatch>;
  remove?: Maybe<CommentPatch>;
};

export type UserOrder = {
  asc?: Maybe<UserOrderable>;
  desc?: Maybe<UserOrderable>;
  then?: Maybe<UserOrder>;
};

export type TagsAggregateResult = {
  __typename?: 'TagsAggregateResult';
  count?: Maybe<Scalars['Int']>;
  nameMin?: Maybe<Scalars['String']>;
  nameMax?: Maybe<Scalars['String']>;
};

export type UpdateTagsPayload = {
  __typename?: 'UpdateTagsPayload';
  tags?: Maybe<Array<Maybe<Tags>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateTagsPayloadTagsArgs = {
  filter?: Maybe<TagsFilter>;
  order?: Maybe<TagsOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum FollowingOrderable {
  StartedFollowingData = 'startedFollowingData'
}

export type Mutation = {
  __typename?: 'Mutation';
  addUser?: Maybe<AddUserPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
  deleteUser?: Maybe<DeleteUserPayload>;
  addFollowing?: Maybe<AddFollowingPayload>;
  updateFollowing?: Maybe<UpdateFollowingPayload>;
  deleteFollowing?: Maybe<DeleteFollowingPayload>;
  addReadingList?: Maybe<AddReadingListPayload>;
  updateReadingList?: Maybe<UpdateReadingListPayload>;
  deleteReadingList?: Maybe<DeleteReadingListPayload>;
  addRating?: Maybe<AddRatingPayload>;
  updateRating?: Maybe<UpdateRatingPayload>;
  deleteRating?: Maybe<DeleteRatingPayload>;
  addPost?: Maybe<AddPostPayload>;
  updatePost?: Maybe<UpdatePostPayload>;
  deletePost?: Maybe<DeletePostPayload>;
  addTags?: Maybe<AddTagsPayload>;
  updateTags?: Maybe<UpdateTagsPayload>;
  deleteTags?: Maybe<DeleteTagsPayload>;
  addComment?: Maybe<AddCommentPayload>;
  updateComment?: Maybe<UpdateCommentPayload>;
  deleteComment?: Maybe<DeleteCommentPayload>;
};


export type MutationAddUserArgs = {
  input: Array<AddUserInput>;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationDeleteUserArgs = {
  filter: UserFilter;
};


export type MutationAddFollowingArgs = {
  input: Array<AddFollowingInput>;
};


export type MutationUpdateFollowingArgs = {
  input: UpdateFollowingInput;
};


export type MutationDeleteFollowingArgs = {
  filter: FollowingFilter;
};


export type MutationAddReadingListArgs = {
  input: Array<AddReadingListInput>;
};


export type MutationUpdateReadingListArgs = {
  input: UpdateReadingListInput;
};


export type MutationDeleteReadingListArgs = {
  filter: ReadingListFilter;
};


export type MutationAddRatingArgs = {
  input: Array<AddRatingInput>;
};


export type MutationUpdateRatingArgs = {
  input: UpdateRatingInput;
};


export type MutationDeleteRatingArgs = {
  filter: RatingFilter;
};


export type MutationAddPostArgs = {
  input: Array<AddPostInput>;
};


export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
};


export type MutationDeletePostArgs = {
  filter: PostFilter;
};


export type MutationAddTagsArgs = {
  input: Array<AddTagsInput>;
};


export type MutationUpdateTagsArgs = {
  input: UpdateTagsInput;
};


export type MutationDeleteTagsArgs = {
  filter: TagsFilter;
};


export type MutationAddCommentArgs = {
  input: Array<AddCommentInput>;
};


export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


export type MutationDeleteCommentArgs = {
  filter: CommentFilter;
};

export type PointRef = {
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
};

export type GenerateMutationParams = {
  add?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type DeleteFollowingPayload = {
  __typename?: 'DeleteFollowingPayload';
  following?: Maybe<Array<Maybe<Following>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteFollowingPayloadFollowingArgs = {
  filter?: Maybe<FollowingFilter>;
  order?: Maybe<FollowingOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum FollowingHasFilter {
  ReadingList = 'readingList',
  StartedFollowingData = 'startedFollowingData'
}

export type UserPatch = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  readingLists?: Maybe<Array<ReadingListRef>>;
  posts?: Maybe<Array<PostRef>>;
  comments?: Maybe<Array<CommentRef>>;
  following?: Maybe<Array<FollowingRef>>;
};

export type Rating = {
  __typename?: 'Rating';
  rid: Scalars['ID'];
  truth: Scalars['Int'];
  agreement: Scalars['Int'];
  author: User;
  readingList?: Maybe<ReadingList>;
  post?: Maybe<Post>;
  comments?: Maybe<Comment>;
};


export type RatingAuthorArgs = {
  filter?: Maybe<UserFilter>;
};


export type RatingReadingListArgs = {
  filter?: Maybe<ReadingListFilter>;
};


export type RatingPostArgs = {
  filter?: Maybe<PostFilter>;
};


export type RatingCommentsArgs = {
  filter?: Maybe<CommentFilter>;
};

export type StringFullTextFilter = {
  alloftext?: Maybe<Scalars['String']>;
  anyoftext?: Maybe<Scalars['String']>;
};

export type StringHashFilter = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum RatingOrderable {
  Truth = 'truth',
  Agreement = 'agreement'
}

export type RatingRef = {
  rid?: Maybe<Scalars['ID']>;
  truth?: Maybe<Scalars['Int']>;
  agreement?: Maybe<Scalars['Int']>;
  author?: Maybe<UserRef>;
  readingList?: Maybe<ReadingListRef>;
  post?: Maybe<PostRef>;
  comments?: Maybe<CommentRef>;
};

export type TagsOrder = {
  asc?: Maybe<TagsOrderable>;
  desc?: Maybe<TagsOrderable>;
  then?: Maybe<TagsOrder>;
};

export type UpdateUserInput = {
  filter: UserFilter;
  set?: Maybe<UserPatch>;
  remove?: Maybe<UserPatch>;
};

export type DeleteReadingListPayload = {
  __typename?: 'DeleteReadingListPayload';
  readingList?: Maybe<Array<Maybe<ReadingList>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteReadingListPayloadReadingListArgs = {
  filter?: Maybe<ReadingListFilter>;
  order?: Maybe<ReadingListOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type FollowingAggregateResult = {
  __typename?: 'FollowingAggregateResult';
  count?: Maybe<Scalars['Int']>;
  startedFollowingDataMin?: Maybe<Scalars['DateTime']>;
  startedFollowingDataMax?: Maybe<Scalars['DateTime']>;
};

export type AuthRule = {
  and?: Maybe<Array<Maybe<AuthRule>>>;
  or?: Maybe<Array<Maybe<AuthRule>>>;
  not?: Maybe<AuthRule>;
  rule?: Maybe<Scalars['String']>;
};

export type Point = {
  __typename?: 'Point';
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
};

export type AddUserPayload = {
  __typename?: 'AddUserPayload';
  user?: Maybe<Array<Maybe<User>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AddPostInput = {
  title: Scalars['String'];
  url: Scalars['String'];
  shortDescription: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  datePublished: Scalars['DateTime'];
  author: UserRef;
  readingList: ReadingListRef;
  comments?: Maybe<Array<CommentRef>>;
  tags?: Maybe<Array<TagsRef>>;
  rating?: Maybe<Array<RatingRef>>;
};

export type PostPatch = {
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  datePublished?: Maybe<Scalars['DateTime']>;
  author?: Maybe<UserRef>;
  readingList?: Maybe<ReadingListRef>;
  comments?: Maybe<Array<CommentRef>>;
  tags?: Maybe<Array<TagsRef>>;
  rating?: Maybe<Array<RatingRef>>;
};

export type IntRange = {
  min: Scalars['Int'];
  max: Scalars['Int'];
};

export type StringExactFilter = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  between?: Maybe<StringRange>;
};

export type CommentAggregateResult = {
  __typename?: 'CommentAggregateResult';
  count?: Maybe<Scalars['Int']>;
  textMin?: Maybe<Scalars['String']>;
  textMax?: Maybe<Scalars['String']>;
};

export type PostAggregateResult = {
  __typename?: 'PostAggregateResult';
  count?: Maybe<Scalars['Int']>;
  titleMin?: Maybe<Scalars['String']>;
  titleMax?: Maybe<Scalars['String']>;
  urlMin?: Maybe<Scalars['String']>;
  urlMax?: Maybe<Scalars['String']>;
  shortDescriptionMin?: Maybe<Scalars['String']>;
  shortDescriptionMax?: Maybe<Scalars['String']>;
  descriptionMin?: Maybe<Scalars['String']>;
  descriptionMax?: Maybe<Scalars['String']>;
  datePublishedMin?: Maybe<Scalars['DateTime']>;
  datePublishedMax?: Maybe<Scalars['DateTime']>;
};

export enum UserOrderable {
  FirstName = 'firstName',
  LastName = 'lastName',
  UserName = 'userName',
  Email = 'email'
}

export type FollowingRef = {
  fid?: Maybe<Scalars['ID']>;
  readingList?: Maybe<Array<Maybe<ReadingListRef>>>;
  startedFollowingData?: Maybe<Scalars['DateTime']>;
};

export type UpdateTagsInput = {
  filter: TagsFilter;
  set?: Maybe<TagsPatch>;
  remove?: Maybe<TagsPatch>;
};

export type DateTimeRange = {
  min: Scalars['DateTime'];
  max: Scalars['DateTime'];
};

export type Polygon = {
  __typename?: 'Polygon';
  coordinates: Array<PointList>;
};

export type PolygonRef = {
  coordinates: Array<PointListRef>;
};

export type FloatFilter = {
  eq?: Maybe<Scalars['Float']>;
  le?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  ge?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  between?: Maybe<FloatRange>;
};

export enum RatingHasFilter {
  Truth = 'truth',
  Agreement = 'agreement',
  Author = 'author',
  ReadingList = 'readingList',
  Post = 'post',
  Comments = 'comments'
}

export enum TagsHasFilter {
  Name = 'name',
  Posts = 'posts',
  ReadingLists = 'readingLists'
}

export type UpdateRatingInput = {
  filter: RatingFilter;
  set?: Maybe<RatingPatch>;
  remove?: Maybe<RatingPatch>;
};

export type Query = {
  __typename?: 'Query';
  getUser?: Maybe<User>;
  queryUser?: Maybe<Array<Maybe<User>>>;
  aggregateUser?: Maybe<UserAggregateResult>;
  getFollowing?: Maybe<Following>;
  queryFollowing?: Maybe<Array<Maybe<Following>>>;
  aggregateFollowing?: Maybe<FollowingAggregateResult>;
  getReadingList?: Maybe<ReadingList>;
  queryReadingList?: Maybe<Array<Maybe<ReadingList>>>;
  aggregateReadingList?: Maybe<ReadingListAggregateResult>;
  getRating?: Maybe<Rating>;
  queryRating?: Maybe<Array<Maybe<Rating>>>;
  aggregateRating?: Maybe<RatingAggregateResult>;
  getPost?: Maybe<Post>;
  queryPost?: Maybe<Array<Maybe<Post>>>;
  aggregatePost?: Maybe<PostAggregateResult>;
  getTags?: Maybe<Tags>;
  queryTags?: Maybe<Array<Maybe<Tags>>>;
  aggregateTags?: Maybe<TagsAggregateResult>;
  getComment?: Maybe<Comment>;
  queryComment?: Maybe<Array<Maybe<Comment>>>;
  aggregateComment?: Maybe<CommentAggregateResult>;
};


export type QueryGetUserArgs = {
  UID: Scalars['ID'];
};


export type QueryQueryUserArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateUserArgs = {
  filter?: Maybe<UserFilter>;
};


export type QueryGetFollowingArgs = {
  fid: Scalars['ID'];
};


export type QueryQueryFollowingArgs = {
  filter?: Maybe<FollowingFilter>;
  order?: Maybe<FollowingOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateFollowingArgs = {
  filter?: Maybe<FollowingFilter>;
};


export type QueryGetReadingListArgs = {
  RID: Scalars['ID'];
};


export type QueryQueryReadingListArgs = {
  filter?: Maybe<ReadingListFilter>;
  order?: Maybe<ReadingListOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateReadingListArgs = {
  filter?: Maybe<ReadingListFilter>;
};


export type QueryGetRatingArgs = {
  rid: Scalars['ID'];
};


export type QueryQueryRatingArgs = {
  filter?: Maybe<RatingFilter>;
  order?: Maybe<RatingOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateRatingArgs = {
  filter?: Maybe<RatingFilter>;
};


export type QueryGetPostArgs = {
  PID: Scalars['ID'];
};


export type QueryQueryPostArgs = {
  filter?: Maybe<PostFilter>;
  order?: Maybe<PostOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregatePostArgs = {
  filter?: Maybe<PostFilter>;
};


export type QueryGetTagsArgs = {
  TID: Scalars['ID'];
};


export type QueryQueryTagsArgs = {
  filter?: Maybe<TagsFilter>;
  order?: Maybe<TagsOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateTagsArgs = {
  filter?: Maybe<TagsFilter>;
};


export type QueryGetCommentArgs = {
  CID: Scalars['ID'];
};


export type QueryQueryCommentArgs = {
  filter?: Maybe<CommentFilter>;
  order?: Maybe<CommentOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateCommentArgs = {
  filter?: Maybe<CommentFilter>;
};

export type AddCommentInput = {
  text: Scalars['String'];
  author: UserRef;
  commentsOn: PostRef;
  rating?: Maybe<Array<Maybe<RatingRef>>>;
};

export type CommentOrder = {
  asc?: Maybe<CommentOrderable>;
  desc?: Maybe<CommentOrderable>;
  then?: Maybe<CommentOrder>;
};

export type PostRef = {
  PID?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  datePublished?: Maybe<Scalars['DateTime']>;
  author?: Maybe<UserRef>;
  readingList?: Maybe<ReadingListRef>;
  comments?: Maybe<Array<CommentRef>>;
  tags?: Maybe<Array<TagsRef>>;
  rating?: Maybe<Array<RatingRef>>;
};

export type AddTagsInput = {
  name: Scalars['String'];
  posts?: Maybe<Array<PostRef>>;
  readingLists?: Maybe<Array<ReadingListRef>>;
};

export type DeleteRatingPayload = {
  __typename?: 'DeleteRatingPayload';
  rating?: Maybe<Array<Maybe<Rating>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteRatingPayloadRatingArgs = {
  filter?: Maybe<RatingFilter>;
  order?: Maybe<RatingOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UpdatePostInput = {
  filter: PostFilter;
  set?: Maybe<PostPatch>;
  remove?: Maybe<PostPatch>;
};

export type Post = {
  __typename?: 'Post';
  PID: Scalars['ID'];
  title: Scalars['String'];
  url: Scalars['String'];
  shortDescription: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  datePublished: Scalars['DateTime'];
  author: User;
  readingList: ReadingList;
  comments?: Maybe<Array<Comment>>;
  tags?: Maybe<Array<Tags>>;
  rating?: Maybe<Array<Rating>>;
  commentsAggregate?: Maybe<CommentAggregateResult>;
  tagsAggregate?: Maybe<TagsAggregateResult>;
  ratingAggregate?: Maybe<RatingAggregateResult>;
};


export type PostAuthorArgs = {
  filter?: Maybe<UserFilter>;
};


export type PostReadingListArgs = {
  filter?: Maybe<ReadingListFilter>;
};


export type PostCommentsArgs = {
  filter?: Maybe<CommentFilter>;
  order?: Maybe<CommentOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PostTagsArgs = {
  filter?: Maybe<TagsFilter>;
  order?: Maybe<TagsOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PostRatingArgs = {
  filter?: Maybe<RatingFilter>;
  order?: Maybe<RatingOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type PostCommentsAggregateArgs = {
  filter?: Maybe<CommentFilter>;
};


export type PostTagsAggregateArgs = {
  filter?: Maybe<TagsFilter>;
};


export type PostRatingAggregateArgs = {
  filter?: Maybe<RatingFilter>;
};

export type GenerateQueryParams = {
  get?: Maybe<Scalars['Boolean']>;
  query?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['Boolean']>;
  aggregate?: Maybe<Scalars['Boolean']>;
};

export type DateTimeFilter = {
  eq?: Maybe<Scalars['DateTime']>;
  le?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  ge?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  between?: Maybe<DateTimeRange>;
};

export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload';
  comment?: Maybe<Array<Maybe<Comment>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteCommentPayloadCommentArgs = {
  filter?: Maybe<CommentFilter>;
  order?: Maybe<CommentOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type DeleteTagsPayload = {
  __typename?: 'DeleteTagsPayload';
  tags?: Maybe<Array<Maybe<Tags>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteTagsPayloadTagsArgs = {
  filter?: Maybe<TagsFilter>;
  order?: Maybe<TagsOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type CommentPatch = {
  text?: Maybe<Scalars['String']>;
  author?: Maybe<UserRef>;
  commentsOn?: Maybe<PostRef>;
  rating?: Maybe<Array<Maybe<RatingRef>>>;
};

export type IntFilter = {
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  between?: Maybe<IntRange>;
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  user?: Maybe<Array<Maybe<User>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UpdatePostPayload = {
  __typename?: 'UpdatePostPayload';
  post?: Maybe<Array<Maybe<Post>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdatePostPayloadPostArgs = {
  filter?: Maybe<PostFilter>;
  order?: Maybe<PostOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum ReadingListOrderable {
  Title = 'title',
  ShortDescription = 'shortDescription',
  Description = 'description',
  DatePublished = 'datePublished'
}

export type UpdateReadingListInput = {
  filter: ReadingListFilter;
  set?: Maybe<ReadingListPatch>;
  remove?: Maybe<ReadingListPatch>;
};

export type Int64Range = {
  min: Scalars['Int64'];
  max: Scalars['Int64'];
};

export type MultiPolygon = {
  __typename?: 'MultiPolygon';
  polygons: Array<Polygon>;
};

export type AddTagsPayload = {
  __typename?: 'AddTagsPayload';
  tags?: Maybe<Array<Maybe<Tags>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddTagsPayloadTagsArgs = {
  filter?: Maybe<TagsFilter>;
  order?: Maybe<TagsOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type ReadingListAggregateResult = {
  __typename?: 'ReadingListAggregateResult';
  count?: Maybe<Scalars['Int']>;
  titleMin?: Maybe<Scalars['String']>;
  titleMax?: Maybe<Scalars['String']>;
  shortDescriptionMin?: Maybe<Scalars['String']>;
  shortDescriptionMax?: Maybe<Scalars['String']>;
  descriptionMin?: Maybe<Scalars['String']>;
  descriptionMax?: Maybe<Scalars['String']>;
  datePublishedMin?: Maybe<Scalars['DateTime']>;
  datePublishedMax?: Maybe<Scalars['DateTime']>;
};

export type CommentFilter = {
  CID?: Maybe<Array<Scalars['ID']>>;
  text?: Maybe<StringFullTextFilter>;
  has?: Maybe<CommentHasFilter>;
  and?: Maybe<Array<Maybe<CommentFilter>>>;
  or?: Maybe<Array<Maybe<CommentFilter>>>;
  not?: Maybe<CommentFilter>;
};

export type RatingOrder = {
  asc?: Maybe<RatingOrderable>;
  desc?: Maybe<RatingOrderable>;
  then?: Maybe<RatingOrder>;
};

export type ReadingListOrder = {
  asc?: Maybe<ReadingListOrderable>;
  desc?: Maybe<ReadingListOrderable>;
  then?: Maybe<ReadingListOrder>;
};

export type TagsPatch = {
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<PostRef>>;
  readingLists?: Maybe<Array<ReadingListRef>>;
};

export type StringTermFilter = {
  allofterms?: Maybe<Scalars['String']>;
  anyofterms?: Maybe<Scalars['String']>;
};


export enum DgraphIndex {
  Int = 'int',
  Int64 = 'int64',
  Float = 'float',
  Bool = 'bool',
  Hash = 'hash',
  Exact = 'exact',
  Term = 'term',
  Fulltext = 'fulltext',
  Trigram = 'trigram',
  Regexp = 'regexp',
  Year = 'year',
  Month = 'month',
  Day = 'day',
  Hour = 'hour',
  Geo = 'geo'
}

export type NearFilter = {
  distance: Scalars['Float'];
  coordinate: PointRef;
};

export type AddRatingPayload = {
  __typename?: 'AddRatingPayload';
  rating?: Maybe<Array<Maybe<Rating>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddRatingPayloadRatingArgs = {
  filter?: Maybe<RatingFilter>;
  order?: Maybe<RatingOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AddReadingListPayload = {
  __typename?: 'AddReadingListPayload';
  readingList?: Maybe<Array<Maybe<ReadingList>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddReadingListPayloadReadingListArgs = {
  filter?: Maybe<ReadingListFilter>;
  order?: Maybe<ReadingListOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum Mode {
  Batch = 'BATCH',
  Single = 'SINGLE'
}

export type AddPostPayload = {
  __typename?: 'AddPostPayload';
  post?: Maybe<Array<Maybe<Post>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddPostPayloadPostArgs = {
  filter?: Maybe<PostFilter>;
  order?: Maybe<PostOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type TagsFilter = {
  TID?: Maybe<Array<Scalars['ID']>>;
  name?: Maybe<StringTermFilter>;
  has?: Maybe<TagsHasFilter>;
  and?: Maybe<Array<Maybe<TagsFilter>>>;
  or?: Maybe<Array<Maybe<TagsFilter>>>;
  not?: Maybe<TagsFilter>;
};

export enum CommentOrderable {
  Text = 'text'
}

export type FollowingOrder = {
  asc?: Maybe<FollowingOrderable>;
  desc?: Maybe<FollowingOrderable>;
  then?: Maybe<FollowingOrder>;
};

export type ReadingListFilter = {
  RID?: Maybe<Array<Scalars['ID']>>;
  title?: Maybe<StringTermFilter>;
  shortDescription?: Maybe<StringFullTextFilter>;
  description?: Maybe<StringFullTextFilter>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isRestricted?: Maybe<Scalars['Boolean']>;
  has?: Maybe<ReadingListHasFilter>;
  and?: Maybe<Array<Maybe<ReadingListFilter>>>;
  or?: Maybe<Array<Maybe<ReadingListFilter>>>;
  not?: Maybe<ReadingListFilter>;
};

export type ReadingList = {
  __typename?: 'ReadingList';
  RID: Scalars['ID'];
  title: Scalars['String'];
  shortDescription: Scalars['String'];
  description: Scalars['String'];
  datePublished: Scalars['DateTime'];
  author: Array<Maybe<User>>;
  isPublic: Scalars['Boolean'];
  isRestricted?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Array<Tags>>;
  posts?: Maybe<Array<Post>>;
  followers?: Maybe<Array<Following>>;
  rating?: Maybe<Array<Rating>>;
  authorAggregate?: Maybe<UserAggregateResult>;
  tagsAggregate?: Maybe<TagsAggregateResult>;
  postsAggregate?: Maybe<PostAggregateResult>;
  followersAggregate?: Maybe<FollowingAggregateResult>;
  ratingAggregate?: Maybe<RatingAggregateResult>;
};


export type ReadingListAuthorArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ReadingListTagsArgs = {
  filter?: Maybe<TagsFilter>;
  order?: Maybe<TagsOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ReadingListPostsArgs = {
  filter?: Maybe<PostFilter>;
  order?: Maybe<PostOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ReadingListFollowersArgs = {
  filter?: Maybe<FollowingFilter>;
  order?: Maybe<FollowingOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ReadingListRatingArgs = {
  filter?: Maybe<RatingFilter>;
  order?: Maybe<RatingOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ReadingListAuthorAggregateArgs = {
  filter?: Maybe<UserFilter>;
};


export type ReadingListTagsAggregateArgs = {
  filter?: Maybe<TagsFilter>;
};


export type ReadingListPostsAggregateArgs = {
  filter?: Maybe<PostFilter>;
};


export type ReadingListFollowersAggregateArgs = {
  filter?: Maybe<FollowingFilter>;
};


export type ReadingListRatingAggregateArgs = {
  filter?: Maybe<RatingFilter>;
};

export type StringRange = {
  min: Scalars['String'];
  max: Scalars['String'];
};

export type PointList = {
  __typename?: 'PointList';
  points: Array<Point>;
};

export type StringRegExpFilter = {
  regexp?: Maybe<Scalars['String']>;
};

export type AddRatingInput = {
  truth: Scalars['Int'];
  agreement: Scalars['Int'];
  author: UserRef;
  readingList?: Maybe<ReadingListRef>;
  post?: Maybe<PostRef>;
  comments?: Maybe<CommentRef>;
};

export type Tags = {
  __typename?: 'Tags';
  TID: Scalars['ID'];
  name: Scalars['String'];
  posts?: Maybe<Array<Post>>;
  readingLists?: Maybe<Array<ReadingList>>;
  postsAggregate?: Maybe<PostAggregateResult>;
  readingListsAggregate?: Maybe<ReadingListAggregateResult>;
};


export type TagsPostsArgs = {
  filter?: Maybe<PostFilter>;
  order?: Maybe<PostOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type TagsReadingListsArgs = {
  filter?: Maybe<ReadingListFilter>;
  order?: Maybe<ReadingListOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type TagsPostsAggregateArgs = {
  filter?: Maybe<PostFilter>;
};


export type TagsReadingListsAggregateArgs = {
  filter?: Maybe<ReadingListFilter>;
};

export enum HttpMethod {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE'
}

export type PointGeoFilter = {
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
};

export type PostOrder = {
  asc?: Maybe<PostOrderable>;
  desc?: Maybe<PostOrderable>;
  then?: Maybe<PostOrder>;
};

export type UserRef = {
  UID?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  readingLists?: Maybe<Array<ReadingListRef>>;
  posts?: Maybe<Array<PostRef>>;
  comments?: Maybe<Array<CommentRef>>;
  following?: Maybe<Array<FollowingRef>>;
};

export type Comment = {
  __typename?: 'Comment';
  CID: Scalars['ID'];
  text: Scalars['String'];
  author: User;
  commentsOn: Post;
  rating?: Maybe<Array<Maybe<Rating>>>;
  ratingAggregate?: Maybe<RatingAggregateResult>;
};


export type CommentAuthorArgs = {
  filter?: Maybe<UserFilter>;
};


export type CommentCommentsOnArgs = {
  filter?: Maybe<PostFilter>;
};


export type CommentRatingArgs = {
  filter?: Maybe<RatingFilter>;
  order?: Maybe<RatingOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type CommentRatingAggregateArgs = {
  filter?: Maybe<RatingFilter>;
};

export type CustomHttp = {
  url: Scalars['String'];
  method: HttpMethod;
  body?: Maybe<Scalars['String']>;
  graphql?: Maybe<Scalars['String']>;
  mode?: Maybe<Mode>;
  forwardHeaders?: Maybe<Array<Scalars['String']>>;
  secretHeaders?: Maybe<Array<Scalars['String']>>;
  introspectionHeaders?: Maybe<Array<Scalars['String']>>;
  skipIntrospection?: Maybe<Scalars['Boolean']>;
};

export type Int64Filter = {
  eq?: Maybe<Scalars['Int64']>;
  le?: Maybe<Scalars['Int64']>;
  lt?: Maybe<Scalars['Int64']>;
  ge?: Maybe<Scalars['Int64']>;
  gt?: Maybe<Scalars['Int64']>;
  between?: Maybe<Int64Range>;
};

export type UserAggregateResult = {
  __typename?: 'UserAggregateResult';
  count?: Maybe<Scalars['Int']>;
  firstNameMin?: Maybe<Scalars['String']>;
  firstNameMax?: Maybe<Scalars['String']>;
  lastNameMin?: Maybe<Scalars['String']>;
  lastNameMax?: Maybe<Scalars['String']>;
  userNameMin?: Maybe<Scalars['String']>;
  userNameMax?: Maybe<Scalars['String']>;
  emailMin?: Maybe<Scalars['String']>;
  emailMax?: Maybe<Scalars['String']>;
};

export enum PostOrderable {
  Title = 'title',
  Url = 'url',
  ShortDescription = 'shortDescription',
  Description = 'description',
  DatePublished = 'datePublished'
}

export type RatingFilter = {
  rid?: Maybe<Array<Scalars['ID']>>;
  has?: Maybe<RatingHasFilter>;
  and?: Maybe<Array<Maybe<RatingFilter>>>;
  or?: Maybe<Array<Maybe<RatingFilter>>>;
  not?: Maybe<RatingFilter>;
};

export type UserFilter = {
  UID?: Maybe<Array<Scalars['ID']>>;
  firstName?: Maybe<StringTermFilter>;
  lastName?: Maybe<StringTermFilter>;
  userName?: Maybe<StringTermFilter>;
  email?: Maybe<StringTermFilter>;
  has?: Maybe<UserHasFilter>;
  and?: Maybe<Array<Maybe<UserFilter>>>;
  or?: Maybe<Array<Maybe<UserFilter>>>;
  not?: Maybe<UserFilter>;
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  user?: Maybe<Array<Maybe<User>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum TagsOrderable {
  Name = 'name'
}

export type ReadingListRef = {
  RID?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  datePublished?: Maybe<Scalars['DateTime']>;
  author?: Maybe<Array<Maybe<UserRef>>>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isRestricted?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Array<TagsRef>>;
  posts?: Maybe<Array<PostRef>>;
  followers?: Maybe<Array<FollowingRef>>;
  rating?: Maybe<Array<RatingRef>>;
};

export type ContainsFilter = {
  point?: Maybe<PointRef>;
  polygon?: Maybe<PolygonRef>;
};

export type UpdateFollowingPayload = {
  __typename?: 'UpdateFollowingPayload';
  following?: Maybe<Array<Maybe<Following>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateFollowingPayloadFollowingArgs = {
  filter?: Maybe<FollowingFilter>;
  order?: Maybe<FollowingOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UpdateReadingListPayload = {
  __typename?: 'UpdateReadingListPayload';
  readingList?: Maybe<Array<Maybe<ReadingList>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateReadingListPayloadReadingListArgs = {
  filter?: Maybe<ReadingListFilter>;
  order?: Maybe<ReadingListOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum ReadingListHasFilter {
  Title = 'title',
  ShortDescription = 'shortDescription',
  Description = 'description',
  DatePublished = 'datePublished',
  Author = 'author',
  IsPublic = 'isPublic',
  IsRestricted = 'isRestricted',
  Tags = 'tags',
  Posts = 'posts',
  Followers = 'followers',
  Rating = 'rating'
}


export type RatingAggregateResult = {
  __typename?: 'RatingAggregateResult';
  count?: Maybe<Scalars['Int']>;
  truthMin?: Maybe<Scalars['Int']>;
  truthMax?: Maybe<Scalars['Int']>;
  truthSum?: Maybe<Scalars['Int']>;
  truthAvg?: Maybe<Scalars['Float']>;
  agreementMin?: Maybe<Scalars['Int']>;
  agreementMax?: Maybe<Scalars['Int']>;
  agreementSum?: Maybe<Scalars['Int']>;
  agreementAvg?: Maybe<Scalars['Float']>;
};

export type ReadingListPatch = {
  title?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  datePublished?: Maybe<Scalars['DateTime']>;
  author?: Maybe<Array<Maybe<UserRef>>>;
  isPublic?: Maybe<Scalars['Boolean']>;
  isRestricted?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Array<TagsRef>>;
  posts?: Maybe<Array<PostRef>>;
  followers?: Maybe<Array<FollowingRef>>;
  rating?: Maybe<Array<RatingRef>>;
};
