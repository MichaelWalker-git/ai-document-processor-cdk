# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiDocumentProcessor <a name="AiDocumentProcessor" id="@horustech/ai-document-processor-cdk.AiDocumentProcessor"></a>

#### Initializers <a name="Initializers" id="@horustech/ai-document-processor-cdk.AiDocumentProcessor.Initializer"></a>

```typescript
import { AiDocumentProcessor } from '@horustech/ai-document-processor-cdk'

new AiDocumentProcessor(scope: Construct, id: string, props: AiDocumentProcessorProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessor.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessor.Initializer.parameter.props">props</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessorProps">AiDocumentProcessorProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@horustech/ai-document-processor-cdk.AiDocumentProcessor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@horustech/ai-document-processor-cdk.AiDocumentProcessor.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@horustech/ai-document-processor-cdk.AiDocumentProcessor.Initializer.parameter.props"></a>

- *Type:* <a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessorProps">AiDocumentProcessorProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessor.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@horustech/ai-document-processor-cdk.AiDocumentProcessor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@horustech/ai-document-processor-cdk.AiDocumentProcessor.isConstruct"></a>

```typescript
import { AiDocumentProcessor } from '@horustech/ai-document-processor-cdk'

AiDocumentProcessor.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.AiDocumentProcessor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessor.property.outputs">outputs</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessorOutputs">AiDocumentProcessorOutputs</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@horustech/ai-document-processor-cdk.AiDocumentProcessor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@horustech/ai-document-processor-cdk.AiDocumentProcessor.property.outputs"></a>

```typescript
public readonly outputs: AiDocumentProcessorOutputs;
```

- *Type:* <a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessorOutputs">AiDocumentProcessorOutputs</a>

---


### ApiStack <a name="ApiStack" id="@horustech/ai-document-processor-cdk.ApiStack"></a>

#### Initializers <a name="Initializers" id="@horustech/ai-document-processor-cdk.ApiStack.Initializer"></a>

```typescript
import { ApiStack } from '@horustech/ai-document-processor-cdk'

new ApiStack(scope: Construct, _id: string, props: ApiStackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.Initializer.parameter._id">_id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.Initializer.parameter.props">props</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.ApiStackProps">ApiStackProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@horustech/ai-document-processor-cdk.ApiStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `_id`<sup>Required</sup> <a name="_id" id="@horustech/ai-document-processor-cdk.ApiStack.Initializer.parameter._id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@horustech/ai-document-processor-cdk.ApiStack.Initializer.parameter.props"></a>

- *Type:* <a href="#@horustech/ai-document-processor-cdk.ApiStackProps">ApiStackProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.addMetadata">addMetadata</a></code> | Adds an arbitrary key-value pair, with information you want to record about the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.addStackTag">addStackTag</a></code> | Configure a stack tag. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.exportStringListValue">exportStringListValue</a></code> | Create a CloudFormation Export for a string list value. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a string value. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.removeStackTag">removeStackTag</a></code> | Remove a stack tag. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.toYamlString">toYamlString</a></code> | Convert an object, potentially containing tokens, to a YAML string. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.setParameter">setParameter</a></code> | Assign a value to one of the nested stack parameters. |

---

##### `toString` <a name="toString" id="@horustech/ai-document-processor-cdk.ApiStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="@horustech/ai-document-processor-cdk.ApiStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="@horustech/ai-document-processor-cdk.ApiStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="@horustech/ai-document-processor-cdk.ApiStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="@horustech/ai-document-processor-cdk.ApiStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitrary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="@horustech/ai-document-processor-cdk.ApiStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@horustech/ai-document-processor-cdk.ApiStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addStackTag` <a name="addStackTag" id="@horustech/ai-document-processor-cdk.ApiStack.addStackTag"></a>

```typescript
public addStackTag(tagName: string, tagValue: string): void
```

Configure a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="@horustech/ai-document-processor-cdk.ApiStack.addStackTag.parameter.tagName"></a>

- *Type:* string

---

###### `tagValue`<sup>Required</sup> <a name="tagValue" id="@horustech/ai-document-processor-cdk.ApiStack.addStackTag.parameter.tagValue"></a>

- *Type:* string

---

##### `addTransform` <a name="addTransform" id="@horustech/ai-document-processor-cdk.ApiStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="@horustech/ai-document-processor-cdk.ApiStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportStringListValue` <a name="exportStringListValue" id="@horustech/ai-document-processor-cdk.ApiStack.exportStringListValue"></a>

```typescript
public exportStringListValue(exportedValue: any, options?: ExportValueOptions): string[]
```

Create a CloudFormation Export for a string list value.

Returns a string list representing the corresponding `Fn.importValue()`
expression for this Export. The export expression is automatically wrapped with an
`Fn::Join` and the import value with an `Fn::Split`, since CloudFormation can only
export strings. You can control the name for the export by passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

See `exportValue` for an example of this process.

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@horustech/ai-document-processor-cdk.ApiStack.exportStringListValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@horustech/ai-document-processor-cdk.ApiStack.exportStringListValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `exportValue` <a name="exportValue" id="@horustech/ai-document-processor-cdk.ApiStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a string value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

**Deployment 1: break the relationship**:

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

**Deployment 2: remove the bucket resource**:

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@horustech/ai-document-processor-cdk.ApiStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@horustech/ai-document-processor-cdk.ApiStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="@horustech/ai-document-processor-cdk.ApiStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

  arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="@horustech/ai-document-processor-cdk.ApiStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="@horustech/ai-document-processor-cdk.ApiStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="@horustech/ai-document-processor-cdk.ApiStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="@horustech/ai-document-processor-cdk.ApiStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="@horustech/ai-document-processor-cdk.ApiStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@horustech/ai-document-processor-cdk.ApiStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `removeStackTag` <a name="removeStackTag" id="@horustech/ai-document-processor-cdk.ApiStack.removeStackTag"></a>

```typescript
public removeStackTag(tagName: string): void
```

Remove a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="@horustech/ai-document-processor-cdk.ApiStack.removeStackTag.parameter.tagName"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="@horustech/ai-document-processor-cdk.ApiStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="@horustech/ai-document-processor-cdk.ApiStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="@horustech/ai-document-processor-cdk.ApiStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="@horustech/ai-document-processor-cdk.ApiStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="@horustech/ai-document-processor-cdk.ApiStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="@horustech/ai-document-processor-cdk.ApiStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.ApiStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="@horustech/ai-document-processor-cdk.ApiStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="@horustech/ai-document-processor-cdk.ApiStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="@horustech/ai-document-processor-cdk.ApiStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="@horustech/ai-document-processor-cdk.ApiStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.ApiStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="@horustech/ai-document-processor-cdk.ApiStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `toYamlString` <a name="toYamlString" id="@horustech/ai-document-processor-cdk.ApiStack.toYamlString"></a>

```typescript
public toYamlString(obj: any): string
```

Convert an object, potentially containing tokens, to a YAML string.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.ApiStack.toYamlString.parameter.obj"></a>

- *Type:* any

---

##### `setParameter` <a name="setParameter" id="@horustech/ai-document-processor-cdk.ApiStack.setParameter"></a>

```typescript
public setParameter(name: string, value: string): void
```

Assign a value to one of the nested stack parameters.

###### `name`<sup>Required</sup> <a name="name" id="@horustech/ai-document-processor-cdk.ApiStack.setParameter.parameter.name"></a>

- *Type:* string

The parameter name (ID).

---

###### `value`<sup>Required</sup> <a name="value" id="@horustech/ai-document-processor-cdk.ApiStack.setParameter.parameter.value"></a>

- *Type:* string

The value to assign.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.isNestedStack">isNestedStack</a></code> | Checks if `x` is an object of type `NestedStack`. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@horustech/ai-document-processor-cdk.ApiStack.isConstruct"></a>

```typescript
import { ApiStack } from '@horustech/ai-document-processor-cdk'

ApiStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.ApiStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="@horustech/ai-document-processor-cdk.ApiStack.isStack"></a>

```typescript
import { ApiStack } from '@horustech/ai-document-processor-cdk'

ApiStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.ApiStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@horustech/ai-document-processor-cdk.ApiStack.of"></a>

```typescript
import { ApiStack } from '@horustech/ai-document-processor-cdk'

ApiStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="@horustech/ai-document-processor-cdk.ApiStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

##### `isNestedStack` <a name="isNestedStack" id="@horustech/ai-document-processor-cdk.ApiStack.isNestedStack"></a>

```typescript
import { ApiStack } from '@horustech/ai-document-processor-cdk'

ApiStack.isNestedStack(x: any)
```

Checks if `x` is an object of type `NestedStack`.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.ApiStack.isNestedStack.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.stackId">stackId</a></code> | <code>string</code> | An attribute that represents the ID of the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.stackName">stackName</a></code> | <code>string</code> | An attribute that represents the name of the nested stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.inputBucketName">inputBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.outputBucketName">outputBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.restApi">restApi</a></code> | <code>aws-cdk-lib.aws_apigateway.RestApi</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.SecurityGroup</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.tableArn">tableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.userPool">userPool</a></code> | <code>aws-cdk-lib.aws_cognito.UserPool</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStack.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@horustech/ai-document-processor-cdk.ApiStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="@horustech/ai-document-processor-cdk.ApiStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concrete account (e.g. `585695031111`) or the
   `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into an **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other account-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@horustech/ai-document-processor-cdk.ApiStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@horustech/ai-document-processor-cdk.ApiStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="@horustech/ai-document-processor-cdk.ApiStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@horustech/ai-document-processor-cdk.ApiStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@horustech/ai-document-processor-cdk.ApiStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="@horustech/ai-document-processor-cdk.ApiStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@horustech/ai-document-processor-cdk.ApiStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@horustech/ai-document-processor-cdk.ApiStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="@horustech/ai-document-processor-cdk.ApiStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concrete region (e.g. `us-west-2`) or the `Aws.REGION`
   token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@horustech/ai-document-processor-cdk.ApiStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

An attribute that represents the ID of the stack.

This is a context aware attribute:
- If this is referenced from the parent stack, it will return `{ "Ref": "LogicalIdOfNestedStackResource" }`.
- If this is referenced from the context of the nested stack, it will return `{ "Ref": "AWS::StackId" }`

Example value: `arn:aws:cloudformation:us-east-2:123456789012:stack/mystack-mynestedstack-sggfrhxhum7w/f449b250-b969-11e0-a185-5081d0136786`

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="@horustech/ai-document-processor-cdk.ApiStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

An attribute that represents the name of the nested stack.

This is a context aware attribute:
- If this is referenced from the parent stack, it will return a token that parses the name from the stack ID.
- If this is referenced from the context of the nested stack, it will return `{ "Ref": "AWS::StackName" }`

Example value: `mystack-mynestedstack-sggfrhxhum7w`

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="@horustech/ai-document-processor-cdk.ApiStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@horustech/ai-document-processor-cdk.ApiStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="@horustech/ai-document-processor-cdk.ApiStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="@horustech/ai-document-processor-cdk.ApiStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="@horustech/ai-document-processor-cdk.ApiStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="@horustech/ai-document-processor-cdk.ApiStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="@horustech/ai-document-processor-cdk.ApiStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="@horustech/ai-document-processor-cdk.ApiStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `inputBucketName`<sup>Required</sup> <a name="inputBucketName" id="@horustech/ai-document-processor-cdk.ApiStack.property.inputBucketName"></a>

```typescript
public readonly inputBucketName: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@horustech/ai-document-processor-cdk.ApiStack.property.kmsKey"></a>

```typescript
public readonly kmsKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key

---

##### `outputBucketName`<sup>Required</sup> <a name="outputBucketName" id="@horustech/ai-document-processor-cdk.ApiStack.property.outputBucketName"></a>

```typescript
public readonly outputBucketName: string;
```

- *Type:* string

---

##### `removalPolicy`<sup>Required</sup> <a name="removalPolicy" id="@horustech/ai-document-processor-cdk.ApiStack.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `restApi`<sup>Required</sup> <a name="restApi" id="@horustech/ai-document-processor-cdk.ApiStack.property.restApi"></a>

```typescript
public readonly restApi: RestApi;
```

- *Type:* aws-cdk-lib.aws_apigateway.RestApi

---

##### `securityGroup`<sup>Required</sup> <a name="securityGroup" id="@horustech/ai-document-processor-cdk.ApiStack.property.securityGroup"></a>

```typescript
public readonly securityGroup: SecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.SecurityGroup

---

##### `tableArn`<sup>Required</sup> <a name="tableArn" id="@horustech/ai-document-processor-cdk.ApiStack.property.tableArn"></a>

```typescript
public readonly tableArn: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@horustech/ai-document-processor-cdk.ApiStack.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `userPool`<sup>Required</sup> <a name="userPool" id="@horustech/ai-document-processor-cdk.ApiStack.property.userPool"></a>

```typescript
public readonly userPool: UserPool;
```

- *Type:* aws-cdk-lib.aws_cognito.UserPool

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@horustech/ai-document-processor-cdk.ApiStack.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---


### App <a name="App" id="@horustech/ai-document-processor-cdk.App"></a>

A construct which represents an entire CDK app. This construct is normally the root of the construct tree.

You would normally define an `App` instance in your program's entrypoint,
then define constructs where the app is used as the parent scope.

After all the child constructs are defined within the app, you should call
`app.synth()` which will emit a "cloud assembly" from this app into the
directory specified by `outdir`. Cloud assemblies includes artifacts such as
CloudFormation templates and assets that are needed to deploy this app into
the AWS cloud.

> [https://docs.aws.amazon.com/cdk/latest/guide/apps.html](https://docs.aws.amazon.com/cdk/latest/guide/apps.html)

#### Initializers <a name="Initializers" id="@horustech/ai-document-processor-cdk.App.Initializer"></a>

```typescript
import { App } from '@horustech/ai-document-processor-cdk'

new App(props?: AppProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.App.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.AppProps</code> | initialization properties. |

---

##### `props`<sup>Optional</sup> <a name="props" id="@horustech/ai-document-processor-cdk.App.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.AppProps

initialization properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.App.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.App.synth">synth</a></code> | Synthesize this stage into a cloud assembly. |

---

##### `toString` <a name="toString" id="@horustech/ai-document-processor-cdk.App.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `synth` <a name="synth" id="@horustech/ai-document-processor-cdk.App.synth"></a>

```typescript
public synth(options?: StageSynthesisOptions): CloudAssembly
```

Synthesize this stage into a cloud assembly.

Once an assembly has been synthesized, it cannot be modified. Subsequent
calls will return the same assembly.

###### `options`<sup>Optional</sup> <a name="options" id="@horustech/ai-document-processor-cdk.App.synth.parameter.options"></a>

- *Type:* aws-cdk-lib.StageSynthesisOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.App.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.App.isStage">isStage</a></code> | Test whether the given construct is a stage. |
| <code><a href="#@horustech/ai-document-processor-cdk.App.of">of</a></code> | Return the stage this construct is contained with, if available. |
| <code><a href="#@horustech/ai-document-processor-cdk.App.isApp">isApp</a></code> | Checks if an object is an instance of the `App` class. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@horustech/ai-document-processor-cdk.App.isConstruct"></a>

```typescript
import { App } from '@horustech/ai-document-processor-cdk'

App.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.App.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStage` <a name="isStage" id="@horustech/ai-document-processor-cdk.App.isStage"></a>

```typescript
import { App } from '@horustech/ai-document-processor-cdk'

App.isStage(x: any)
```

Test whether the given construct is a stage.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.App.isStage.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@horustech/ai-document-processor-cdk.App.of"></a>

```typescript
import { App } from '@horustech/ai-document-processor-cdk'

App.of(construct: IConstruct)
```

Return the stage this construct is contained with, if available.

If called
on a nested stage, returns its parent.

###### `construct`<sup>Required</sup> <a name="construct" id="@horustech/ai-document-processor-cdk.App.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isApp` <a name="isApp" id="@horustech/ai-document-processor-cdk.App.isApp"></a>

```typescript
import { App } from '@horustech/ai-document-processor-cdk'

App.isApp(obj: any)
```

Checks if an object is an instance of the `App` class.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.App.isApp.parameter.obj"></a>

- *Type:* any

The object to evaluate.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.App.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@horustech/ai-document-processor-cdk.App.property.artifactId">artifactId</a></code> | <code>string</code> | Artifact ID of the assembly if it is a nested stage. The root stage (app) will return an empty string. |
| <code><a href="#@horustech/ai-document-processor-cdk.App.property.assetOutdir">assetOutdir</a></code> | <code>string</code> | The cloud assembly asset output directory. |
| <code><a href="#@horustech/ai-document-processor-cdk.App.property.outdir">outdir</a></code> | <code>string</code> | The cloud assembly output directory. |
| <code><a href="#@horustech/ai-document-processor-cdk.App.property.policyValidationBeta1">policyValidationBeta1</a></code> | <code>aws-cdk-lib.IPolicyValidationPluginBeta1[]</code> | Validation plugins to run during synthesis. |
| <code><a href="#@horustech/ai-document-processor-cdk.App.property.stageName">stageName</a></code> | <code>string</code> | The name of the stage. |
| <code><a href="#@horustech/ai-document-processor-cdk.App.property.account">account</a></code> | <code>string</code> | The default account for all resources defined within this stage. |
| <code><a href="#@horustech/ai-document-processor-cdk.App.property.parentStage">parentStage</a></code> | <code>aws-cdk-lib.Stage</code> | The parent stage or `undefined` if this is the app. |
| <code><a href="#@horustech/ai-document-processor-cdk.App.property.region">region</a></code> | <code>string</code> | The default region for all resources defined within this stage. |

---

##### `node`<sup>Required</sup> <a name="node" id="@horustech/ai-document-processor-cdk.App.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@horustech/ai-document-processor-cdk.App.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

Artifact ID of the assembly if it is a nested stage. The root stage (app) will return an empty string.

Derived from the construct path.

---

##### `assetOutdir`<sup>Required</sup> <a name="assetOutdir" id="@horustech/ai-document-processor-cdk.App.property.assetOutdir"></a>

```typescript
public readonly assetOutdir: string;
```

- *Type:* string

The cloud assembly asset output directory.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@horustech/ai-document-processor-cdk.App.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

The cloud assembly output directory.

---

##### `policyValidationBeta1`<sup>Required</sup> <a name="policyValidationBeta1" id="@horustech/ai-document-processor-cdk.App.property.policyValidationBeta1"></a>

```typescript
public readonly policyValidationBeta1: IPolicyValidationPluginBeta1[];
```

- *Type:* aws-cdk-lib.IPolicyValidationPluginBeta1[]
- *Default:* no validation plugins are used

Validation plugins to run during synthesis.

If any plugin reports any violation,
synthesis will be interrupted and the report displayed to the user.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@horustech/ai-document-processor-cdk.App.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The name of the stage.

Based on names of the parent stages separated by
hypens.

---

##### `account`<sup>Optional</sup> <a name="account" id="@horustech/ai-document-processor-cdk.App.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The default account for all resources defined within this stage.

---

##### `parentStage`<sup>Optional</sup> <a name="parentStage" id="@horustech/ai-document-processor-cdk.App.property.parentStage"></a>

```typescript
public readonly parentStage: Stage;
```

- *Type:* aws-cdk-lib.Stage

The parent stage or `undefined` if this is the app.

*

---

##### `region`<sup>Optional</sup> <a name="region" id="@horustech/ai-document-processor-cdk.App.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The default region for all resources defined within this stage.

---


### BackendAppStack <a name="BackendAppStack" id="@horustech/ai-document-processor-cdk.BackendAppStack"></a>

#### Initializers <a name="Initializers" id="@horustech/ai-document-processor-cdk.BackendAppStack.Initializer"></a>

```typescript
import { BackendAppStack } from '@horustech/ai-document-processor-cdk'

new BackendAppStack(scope: Construct, id: string, args: StackProps, props?: StackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.Initializer.parameter.args">args</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.StackProps">StackProps</a></code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.StackProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@horustech/ai-document-processor-cdk.BackendAppStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@horustech/ai-document-processor-cdk.BackendAppStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@horustech/ai-document-processor-cdk.BackendAppStack.Initializer.parameter.args"></a>

- *Type:* <a href="#@horustech/ai-document-processor-cdk.StackProps">StackProps</a>

---

##### `props`<sup>Optional</sup> <a name="props" id="@horustech/ai-document-processor-cdk.BackendAppStack.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.StackProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.addMetadata">addMetadata</a></code> | Adds an arbitrary key-value pair, with information you want to record about the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.addStackTag">addStackTag</a></code> | Configure a stack tag. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.exportStringListValue">exportStringListValue</a></code> | Create a CloudFormation Export for a string list value. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a string value. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.removeStackTag">removeStackTag</a></code> | Remove a stack tag. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.toYamlString">toYamlString</a></code> | Convert an object, potentially containing tokens, to a YAML string. |

---

##### `toString` <a name="toString" id="@horustech/ai-document-processor-cdk.BackendAppStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="@horustech/ai-document-processor-cdk.BackendAppStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="@horustech/ai-document-processor-cdk.BackendAppStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="@horustech/ai-document-processor-cdk.BackendAppStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="@horustech/ai-document-processor-cdk.BackendAppStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitrary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="@horustech/ai-document-processor-cdk.BackendAppStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@horustech/ai-document-processor-cdk.BackendAppStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addStackTag` <a name="addStackTag" id="@horustech/ai-document-processor-cdk.BackendAppStack.addStackTag"></a>

```typescript
public addStackTag(tagName: string, tagValue: string): void
```

Configure a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="@horustech/ai-document-processor-cdk.BackendAppStack.addStackTag.parameter.tagName"></a>

- *Type:* string

---

###### `tagValue`<sup>Required</sup> <a name="tagValue" id="@horustech/ai-document-processor-cdk.BackendAppStack.addStackTag.parameter.tagValue"></a>

- *Type:* string

---

##### `addTransform` <a name="addTransform" id="@horustech/ai-document-processor-cdk.BackendAppStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="@horustech/ai-document-processor-cdk.BackendAppStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportStringListValue` <a name="exportStringListValue" id="@horustech/ai-document-processor-cdk.BackendAppStack.exportStringListValue"></a>

```typescript
public exportStringListValue(exportedValue: any, options?: ExportValueOptions): string[]
```

Create a CloudFormation Export for a string list value.

Returns a string list representing the corresponding `Fn.importValue()`
expression for this Export. The export expression is automatically wrapped with an
`Fn::Join` and the import value with an `Fn::Split`, since CloudFormation can only
export strings. You can control the name for the export by passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

See `exportValue` for an example of this process.

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@horustech/ai-document-processor-cdk.BackendAppStack.exportStringListValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@horustech/ai-document-processor-cdk.BackendAppStack.exportStringListValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `exportValue` <a name="exportValue" id="@horustech/ai-document-processor-cdk.BackendAppStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a string value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

**Deployment 1: break the relationship**:

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

**Deployment 2: remove the bucket resource**:

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@horustech/ai-document-processor-cdk.BackendAppStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@horustech/ai-document-processor-cdk.BackendAppStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="@horustech/ai-document-processor-cdk.BackendAppStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

  arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="@horustech/ai-document-processor-cdk.BackendAppStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="@horustech/ai-document-processor-cdk.BackendAppStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="@horustech/ai-document-processor-cdk.BackendAppStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="@horustech/ai-document-processor-cdk.BackendAppStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="@horustech/ai-document-processor-cdk.BackendAppStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@horustech/ai-document-processor-cdk.BackendAppStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `removeStackTag` <a name="removeStackTag" id="@horustech/ai-document-processor-cdk.BackendAppStack.removeStackTag"></a>

```typescript
public removeStackTag(tagName: string): void
```

Remove a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="@horustech/ai-document-processor-cdk.BackendAppStack.removeStackTag.parameter.tagName"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="@horustech/ai-document-processor-cdk.BackendAppStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="@horustech/ai-document-processor-cdk.BackendAppStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="@horustech/ai-document-processor-cdk.BackendAppStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="@horustech/ai-document-processor-cdk.BackendAppStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="@horustech/ai-document-processor-cdk.BackendAppStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="@horustech/ai-document-processor-cdk.BackendAppStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.BackendAppStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="@horustech/ai-document-processor-cdk.BackendAppStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="@horustech/ai-document-processor-cdk.BackendAppStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="@horustech/ai-document-processor-cdk.BackendAppStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="@horustech/ai-document-processor-cdk.BackendAppStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.BackendAppStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="@horustech/ai-document-processor-cdk.BackendAppStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `toYamlString` <a name="toYamlString" id="@horustech/ai-document-processor-cdk.BackendAppStack.toYamlString"></a>

```typescript
public toYamlString(obj: any): string
```

Convert an object, potentially containing tokens, to a YAML string.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.BackendAppStack.toYamlString.parameter.obj"></a>

- *Type:* any

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@horustech/ai-document-processor-cdk.BackendAppStack.isConstruct"></a>

```typescript
import { BackendAppStack } from '@horustech/ai-document-processor-cdk'

BackendAppStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.BackendAppStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="@horustech/ai-document-processor-cdk.BackendAppStack.isStack"></a>

```typescript
import { BackendAppStack } from '@horustech/ai-document-processor-cdk'

BackendAppStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.BackendAppStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@horustech/ai-document-processor-cdk.BackendAppStack.of"></a>

```typescript
import { BackendAppStack } from '@horustech/ai-document-processor-cdk'

BackendAppStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="@horustech/ai-document-processor-cdk.BackendAppStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.property.stackId">stackId</a></code> | <code>string</code> | The ID of the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.property.stackName">stackName</a></code> | <code>string</code> | The concrete CloudFormation physical stack name. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#@horustech/ai-document-processor-cdk.BackendAppStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |

---

##### `node`<sup>Required</sup> <a name="node" id="@horustech/ai-document-processor-cdk.BackendAppStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="@horustech/ai-document-processor-cdk.BackendAppStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concrete account (e.g. `585695031111`) or the
   `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into an **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other account-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@horustech/ai-document-processor-cdk.BackendAppStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@horustech/ai-document-processor-cdk.BackendAppStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="@horustech/ai-document-processor-cdk.BackendAppStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@horustech/ai-document-processor-cdk.BackendAppStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@horustech/ai-document-processor-cdk.BackendAppStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="@horustech/ai-document-processor-cdk.BackendAppStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@horustech/ai-document-processor-cdk.BackendAppStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@horustech/ai-document-processor-cdk.BackendAppStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="@horustech/ai-document-processor-cdk.BackendAppStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concrete region (e.g. `us-west-2`) or the `Aws.REGION`
   token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@horustech/ai-document-processor-cdk.BackendAppStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The ID of the stack.

---

*Example*

```typescript
// After resolving, looks like
'arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123'
```


##### `stackName`<sup>Required</sup> <a name="stackName" id="@horustech/ai-document-processor-cdk.BackendAppStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The concrete CloudFormation physical stack name.

This is either the name defined explicitly in the `stackName` prop or
allocated based on the stack's location in the construct tree. Stacks that
are directly defined under the app use their construct `id` as their stack
name. Stacks that are defined deeper within the tree will use a hashed naming
scheme based on the construct path to ensure uniqueness.

If you wish to obtain the deploy-time AWS::StackName intrinsic,
you can use `Aws.STACK_NAME` directly.

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="@horustech/ai-document-processor-cdk.BackendAppStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@horustech/ai-document-processor-cdk.BackendAppStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="@horustech/ai-document-processor-cdk.BackendAppStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="@horustech/ai-document-processor-cdk.BackendAppStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="@horustech/ai-document-processor-cdk.BackendAppStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="@horustech/ai-document-processor-cdk.BackendAppStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="@horustech/ai-document-processor-cdk.BackendAppStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="@horustech/ai-document-processor-cdk.BackendAppStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---


### CognitoStack <a name="CognitoStack" id="@horustech/ai-document-processor-cdk.CognitoStack"></a>

#### Initializers <a name="Initializers" id="@horustech/ai-document-processor-cdk.CognitoStack.Initializer"></a>

```typescript
import { CognitoStack } from '@horustech/ai-document-processor-cdk'

new CognitoStack(scope: Construct, id: string, props: CognitoStackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.Initializer.parameter.props">props</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.CognitoStackProps">CognitoStackProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@horustech/ai-document-processor-cdk.CognitoStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@horustech/ai-document-processor-cdk.CognitoStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@horustech/ai-document-processor-cdk.CognitoStack.Initializer.parameter.props"></a>

- *Type:* <a href="#@horustech/ai-document-processor-cdk.CognitoStackProps">CognitoStackProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.addMetadata">addMetadata</a></code> | Adds an arbitrary key-value pair, with information you want to record about the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.addStackTag">addStackTag</a></code> | Configure a stack tag. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.exportStringListValue">exportStringListValue</a></code> | Create a CloudFormation Export for a string list value. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a string value. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.removeStackTag">removeStackTag</a></code> | Remove a stack tag. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.toYamlString">toYamlString</a></code> | Convert an object, potentially containing tokens, to a YAML string. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.setParameter">setParameter</a></code> | Assign a value to one of the nested stack parameters. |

---

##### `toString` <a name="toString" id="@horustech/ai-document-processor-cdk.CognitoStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="@horustech/ai-document-processor-cdk.CognitoStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="@horustech/ai-document-processor-cdk.CognitoStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="@horustech/ai-document-processor-cdk.CognitoStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="@horustech/ai-document-processor-cdk.CognitoStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitrary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="@horustech/ai-document-processor-cdk.CognitoStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@horustech/ai-document-processor-cdk.CognitoStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addStackTag` <a name="addStackTag" id="@horustech/ai-document-processor-cdk.CognitoStack.addStackTag"></a>

```typescript
public addStackTag(tagName: string, tagValue: string): void
```

Configure a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="@horustech/ai-document-processor-cdk.CognitoStack.addStackTag.parameter.tagName"></a>

- *Type:* string

---

###### `tagValue`<sup>Required</sup> <a name="tagValue" id="@horustech/ai-document-processor-cdk.CognitoStack.addStackTag.parameter.tagValue"></a>

- *Type:* string

---

##### `addTransform` <a name="addTransform" id="@horustech/ai-document-processor-cdk.CognitoStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="@horustech/ai-document-processor-cdk.CognitoStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportStringListValue` <a name="exportStringListValue" id="@horustech/ai-document-processor-cdk.CognitoStack.exportStringListValue"></a>

```typescript
public exportStringListValue(exportedValue: any, options?: ExportValueOptions): string[]
```

Create a CloudFormation Export for a string list value.

Returns a string list representing the corresponding `Fn.importValue()`
expression for this Export. The export expression is automatically wrapped with an
`Fn::Join` and the import value with an `Fn::Split`, since CloudFormation can only
export strings. You can control the name for the export by passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

See `exportValue` for an example of this process.

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@horustech/ai-document-processor-cdk.CognitoStack.exportStringListValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@horustech/ai-document-processor-cdk.CognitoStack.exportStringListValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `exportValue` <a name="exportValue" id="@horustech/ai-document-processor-cdk.CognitoStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a string value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

**Deployment 1: break the relationship**:

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

**Deployment 2: remove the bucket resource**:

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@horustech/ai-document-processor-cdk.CognitoStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@horustech/ai-document-processor-cdk.CognitoStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="@horustech/ai-document-processor-cdk.CognitoStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

  arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="@horustech/ai-document-processor-cdk.CognitoStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="@horustech/ai-document-processor-cdk.CognitoStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="@horustech/ai-document-processor-cdk.CognitoStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="@horustech/ai-document-processor-cdk.CognitoStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="@horustech/ai-document-processor-cdk.CognitoStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@horustech/ai-document-processor-cdk.CognitoStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `removeStackTag` <a name="removeStackTag" id="@horustech/ai-document-processor-cdk.CognitoStack.removeStackTag"></a>

```typescript
public removeStackTag(tagName: string): void
```

Remove a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="@horustech/ai-document-processor-cdk.CognitoStack.removeStackTag.parameter.tagName"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="@horustech/ai-document-processor-cdk.CognitoStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="@horustech/ai-document-processor-cdk.CognitoStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="@horustech/ai-document-processor-cdk.CognitoStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="@horustech/ai-document-processor-cdk.CognitoStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="@horustech/ai-document-processor-cdk.CognitoStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="@horustech/ai-document-processor-cdk.CognitoStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.CognitoStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="@horustech/ai-document-processor-cdk.CognitoStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="@horustech/ai-document-processor-cdk.CognitoStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="@horustech/ai-document-processor-cdk.CognitoStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="@horustech/ai-document-processor-cdk.CognitoStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.CognitoStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="@horustech/ai-document-processor-cdk.CognitoStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `toYamlString` <a name="toYamlString" id="@horustech/ai-document-processor-cdk.CognitoStack.toYamlString"></a>

```typescript
public toYamlString(obj: any): string
```

Convert an object, potentially containing tokens, to a YAML string.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.CognitoStack.toYamlString.parameter.obj"></a>

- *Type:* any

---

##### `setParameter` <a name="setParameter" id="@horustech/ai-document-processor-cdk.CognitoStack.setParameter"></a>

```typescript
public setParameter(name: string, value: string): void
```

Assign a value to one of the nested stack parameters.

###### `name`<sup>Required</sup> <a name="name" id="@horustech/ai-document-processor-cdk.CognitoStack.setParameter.parameter.name"></a>

- *Type:* string

The parameter name (ID).

---

###### `value`<sup>Required</sup> <a name="value" id="@horustech/ai-document-processor-cdk.CognitoStack.setParameter.parameter.value"></a>

- *Type:* string

The value to assign.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.isNestedStack">isNestedStack</a></code> | Checks if `x` is an object of type `NestedStack`. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@horustech/ai-document-processor-cdk.CognitoStack.isConstruct"></a>

```typescript
import { CognitoStack } from '@horustech/ai-document-processor-cdk'

CognitoStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.CognitoStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="@horustech/ai-document-processor-cdk.CognitoStack.isStack"></a>

```typescript
import { CognitoStack } from '@horustech/ai-document-processor-cdk'

CognitoStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.CognitoStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@horustech/ai-document-processor-cdk.CognitoStack.of"></a>

```typescript
import { CognitoStack } from '@horustech/ai-document-processor-cdk'

CognitoStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="@horustech/ai-document-processor-cdk.CognitoStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

##### `isNestedStack` <a name="isNestedStack" id="@horustech/ai-document-processor-cdk.CognitoStack.isNestedStack"></a>

```typescript
import { CognitoStack } from '@horustech/ai-document-processor-cdk'

CognitoStack.isNestedStack(x: any)
```

Checks if `x` is an object of type `NestedStack`.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.CognitoStack.isNestedStack.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.stackId">stackId</a></code> | <code>string</code> | An attribute that represents the ID of the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.stackName">stackName</a></code> | <code>string</code> | An attribute that represents the name of the nested stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.authenticatedRole">authenticatedRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.clientUrl">clientUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.cognitoClient">cognitoClient</a></code> | <code>aws-cdk-lib.aws_cognito.UserPoolClient</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.identityPool">identityPool</a></code> | <code>aws-cdk-lib.aws_cognito.CfnIdentityPool</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.inputBucket">inputBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.outputBucket">outputBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.userPool">userPool</a></code> | <code>aws-cdk-lib.aws_cognito.UserPool</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.userPoolDomain">userPoolDomain</a></code> | <code>aws-cdk-lib.aws_cognito.UserPoolDomain</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStack.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@horustech/ai-document-processor-cdk.CognitoStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="@horustech/ai-document-processor-cdk.CognitoStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concrete account (e.g. `585695031111`) or the
   `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into an **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other account-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@horustech/ai-document-processor-cdk.CognitoStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@horustech/ai-document-processor-cdk.CognitoStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="@horustech/ai-document-processor-cdk.CognitoStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@horustech/ai-document-processor-cdk.CognitoStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@horustech/ai-document-processor-cdk.CognitoStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="@horustech/ai-document-processor-cdk.CognitoStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@horustech/ai-document-processor-cdk.CognitoStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@horustech/ai-document-processor-cdk.CognitoStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="@horustech/ai-document-processor-cdk.CognitoStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concrete region (e.g. `us-west-2`) or the `Aws.REGION`
   token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@horustech/ai-document-processor-cdk.CognitoStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

An attribute that represents the ID of the stack.

This is a context aware attribute:
- If this is referenced from the parent stack, it will return `{ "Ref": "LogicalIdOfNestedStackResource" }`.
- If this is referenced from the context of the nested stack, it will return `{ "Ref": "AWS::StackId" }`

Example value: `arn:aws:cloudformation:us-east-2:123456789012:stack/mystack-mynestedstack-sggfrhxhum7w/f449b250-b969-11e0-a185-5081d0136786`

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="@horustech/ai-document-processor-cdk.CognitoStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

An attribute that represents the name of the nested stack.

This is a context aware attribute:
- If this is referenced from the parent stack, it will return a token that parses the name from the stack ID.
- If this is referenced from the context of the nested stack, it will return `{ "Ref": "AWS::StackName" }`

Example value: `mystack-mynestedstack-sggfrhxhum7w`

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="@horustech/ai-document-processor-cdk.CognitoStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@horustech/ai-document-processor-cdk.CognitoStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="@horustech/ai-document-processor-cdk.CognitoStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="@horustech/ai-document-processor-cdk.CognitoStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="@horustech/ai-document-processor-cdk.CognitoStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="@horustech/ai-document-processor-cdk.CognitoStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="@horustech/ai-document-processor-cdk.CognitoStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="@horustech/ai-document-processor-cdk.CognitoStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `authenticatedRole`<sup>Required</sup> <a name="authenticatedRole" id="@horustech/ai-document-processor-cdk.CognitoStack.property.authenticatedRole"></a>

```typescript
public readonly authenticatedRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---

##### `clientUrl`<sup>Required</sup> <a name="clientUrl" id="@horustech/ai-document-processor-cdk.CognitoStack.property.clientUrl"></a>

```typescript
public readonly clientUrl: string;
```

- *Type:* string

---

##### `cognitoClient`<sup>Required</sup> <a name="cognitoClient" id="@horustech/ai-document-processor-cdk.CognitoStack.property.cognitoClient"></a>

```typescript
public readonly cognitoClient: UserPoolClient;
```

- *Type:* aws-cdk-lib.aws_cognito.UserPoolClient

---

##### `identityPool`<sup>Required</sup> <a name="identityPool" id="@horustech/ai-document-processor-cdk.CognitoStack.property.identityPool"></a>

```typescript
public readonly identityPool: CfnIdentityPool;
```

- *Type:* aws-cdk-lib.aws_cognito.CfnIdentityPool

---

##### `inputBucket`<sup>Required</sup> <a name="inputBucket" id="@horustech/ai-document-processor-cdk.CognitoStack.property.inputBucket"></a>

```typescript
public readonly inputBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@horustech/ai-document-processor-cdk.CognitoStack.property.kmsKey"></a>

```typescript
public readonly kmsKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key

---

##### `outputBucket`<sup>Required</sup> <a name="outputBucket" id="@horustech/ai-document-processor-cdk.CognitoStack.property.outputBucket"></a>

```typescript
public readonly outputBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `removalPolicy`<sup>Required</sup> <a name="removalPolicy" id="@horustech/ai-document-processor-cdk.CognitoStack.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `userPool`<sup>Required</sup> <a name="userPool" id="@horustech/ai-document-processor-cdk.CognitoStack.property.userPool"></a>

```typescript
public readonly userPool: UserPool;
```

- *Type:* aws-cdk-lib.aws_cognito.UserPool

---

##### `userPoolDomain`<sup>Required</sup> <a name="userPoolDomain" id="@horustech/ai-document-processor-cdk.CognitoStack.property.userPoolDomain"></a>

```typescript
public readonly userPoolDomain: UserPoolDomain;
```

- *Type:* aws-cdk-lib.aws_cognito.UserPoolDomain

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@horustech/ai-document-processor-cdk.CognitoStack.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---


### DynamoDbStack <a name="DynamoDbStack" id="@horustech/ai-document-processor-cdk.DynamoDbStack"></a>

#### Initializers <a name="Initializers" id="@horustech/ai-document-processor-cdk.DynamoDbStack.Initializer"></a>

```typescript
import { DynamoDbStack } from '@horustech/ai-document-processor-cdk'

new DynamoDbStack(scope: Construct, id: string, props: DynamoDbStackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.Initializer.parameter.props">props</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStackProps">DynamoDbStackProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@horustech/ai-document-processor-cdk.DynamoDbStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@horustech/ai-document-processor-cdk.DynamoDbStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@horustech/ai-document-processor-cdk.DynamoDbStack.Initializer.parameter.props"></a>

- *Type:* <a href="#@horustech/ai-document-processor-cdk.DynamoDbStackProps">DynamoDbStackProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.addMetadata">addMetadata</a></code> | Adds an arbitrary key-value pair, with information you want to record about the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.addStackTag">addStackTag</a></code> | Configure a stack tag. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.exportStringListValue">exportStringListValue</a></code> | Create a CloudFormation Export for a string list value. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a string value. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.removeStackTag">removeStackTag</a></code> | Remove a stack tag. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.toYamlString">toYamlString</a></code> | Convert an object, potentially containing tokens, to a YAML string. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.setParameter">setParameter</a></code> | Assign a value to one of the nested stack parameters. |

---

##### `toString` <a name="toString" id="@horustech/ai-document-processor-cdk.DynamoDbStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="@horustech/ai-document-processor-cdk.DynamoDbStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="@horustech/ai-document-processor-cdk.DynamoDbStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="@horustech/ai-document-processor-cdk.DynamoDbStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="@horustech/ai-document-processor-cdk.DynamoDbStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitrary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="@horustech/ai-document-processor-cdk.DynamoDbStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@horustech/ai-document-processor-cdk.DynamoDbStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addStackTag` <a name="addStackTag" id="@horustech/ai-document-processor-cdk.DynamoDbStack.addStackTag"></a>

```typescript
public addStackTag(tagName: string, tagValue: string): void
```

Configure a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="@horustech/ai-document-processor-cdk.DynamoDbStack.addStackTag.parameter.tagName"></a>

- *Type:* string

---

###### `tagValue`<sup>Required</sup> <a name="tagValue" id="@horustech/ai-document-processor-cdk.DynamoDbStack.addStackTag.parameter.tagValue"></a>

- *Type:* string

---

##### `addTransform` <a name="addTransform" id="@horustech/ai-document-processor-cdk.DynamoDbStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="@horustech/ai-document-processor-cdk.DynamoDbStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportStringListValue` <a name="exportStringListValue" id="@horustech/ai-document-processor-cdk.DynamoDbStack.exportStringListValue"></a>

```typescript
public exportStringListValue(exportedValue: any, options?: ExportValueOptions): string[]
```

Create a CloudFormation Export for a string list value.

Returns a string list representing the corresponding `Fn.importValue()`
expression for this Export. The export expression is automatically wrapped with an
`Fn::Join` and the import value with an `Fn::Split`, since CloudFormation can only
export strings. You can control the name for the export by passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

See `exportValue` for an example of this process.

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@horustech/ai-document-processor-cdk.DynamoDbStack.exportStringListValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@horustech/ai-document-processor-cdk.DynamoDbStack.exportStringListValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `exportValue` <a name="exportValue" id="@horustech/ai-document-processor-cdk.DynamoDbStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a string value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

**Deployment 1: break the relationship**:

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

**Deployment 2: remove the bucket resource**:

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@horustech/ai-document-processor-cdk.DynamoDbStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@horustech/ai-document-processor-cdk.DynamoDbStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="@horustech/ai-document-processor-cdk.DynamoDbStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

  arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="@horustech/ai-document-processor-cdk.DynamoDbStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="@horustech/ai-document-processor-cdk.DynamoDbStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="@horustech/ai-document-processor-cdk.DynamoDbStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="@horustech/ai-document-processor-cdk.DynamoDbStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="@horustech/ai-document-processor-cdk.DynamoDbStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@horustech/ai-document-processor-cdk.DynamoDbStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `removeStackTag` <a name="removeStackTag" id="@horustech/ai-document-processor-cdk.DynamoDbStack.removeStackTag"></a>

```typescript
public removeStackTag(tagName: string): void
```

Remove a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="@horustech/ai-document-processor-cdk.DynamoDbStack.removeStackTag.parameter.tagName"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="@horustech/ai-document-processor-cdk.DynamoDbStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="@horustech/ai-document-processor-cdk.DynamoDbStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="@horustech/ai-document-processor-cdk.DynamoDbStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="@horustech/ai-document-processor-cdk.DynamoDbStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="@horustech/ai-document-processor-cdk.DynamoDbStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="@horustech/ai-document-processor-cdk.DynamoDbStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.DynamoDbStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="@horustech/ai-document-processor-cdk.DynamoDbStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="@horustech/ai-document-processor-cdk.DynamoDbStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="@horustech/ai-document-processor-cdk.DynamoDbStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="@horustech/ai-document-processor-cdk.DynamoDbStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.DynamoDbStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="@horustech/ai-document-processor-cdk.DynamoDbStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `toYamlString` <a name="toYamlString" id="@horustech/ai-document-processor-cdk.DynamoDbStack.toYamlString"></a>

```typescript
public toYamlString(obj: any): string
```

Convert an object, potentially containing tokens, to a YAML string.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.DynamoDbStack.toYamlString.parameter.obj"></a>

- *Type:* any

---

##### `setParameter` <a name="setParameter" id="@horustech/ai-document-processor-cdk.DynamoDbStack.setParameter"></a>

```typescript
public setParameter(name: string, value: string): void
```

Assign a value to one of the nested stack parameters.

###### `name`<sup>Required</sup> <a name="name" id="@horustech/ai-document-processor-cdk.DynamoDbStack.setParameter.parameter.name"></a>

- *Type:* string

The parameter name (ID).

---

###### `value`<sup>Required</sup> <a name="value" id="@horustech/ai-document-processor-cdk.DynamoDbStack.setParameter.parameter.value"></a>

- *Type:* string

The value to assign.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.isNestedStack">isNestedStack</a></code> | Checks if `x` is an object of type `NestedStack`. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@horustech/ai-document-processor-cdk.DynamoDbStack.isConstruct"></a>

```typescript
import { DynamoDbStack } from '@horustech/ai-document-processor-cdk'

DynamoDbStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.DynamoDbStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="@horustech/ai-document-processor-cdk.DynamoDbStack.isStack"></a>

```typescript
import { DynamoDbStack } from '@horustech/ai-document-processor-cdk'

DynamoDbStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.DynamoDbStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@horustech/ai-document-processor-cdk.DynamoDbStack.of"></a>

```typescript
import { DynamoDbStack } from '@horustech/ai-document-processor-cdk'

DynamoDbStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="@horustech/ai-document-processor-cdk.DynamoDbStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

##### `isNestedStack` <a name="isNestedStack" id="@horustech/ai-document-processor-cdk.DynamoDbStack.isNestedStack"></a>

```typescript
import { DynamoDbStack } from '@horustech/ai-document-processor-cdk'

DynamoDbStack.isNestedStack(x: any)
```

Checks if `x` is an object of type `NestedStack`.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.DynamoDbStack.isNestedStack.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.property.stackId">stackId</a></code> | <code>string</code> | An attribute that represents the ID of the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.property.stackName">stackName</a></code> | <code>string</code> | An attribute that represents the name of the nested stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.property.dataTable">dataTable</a></code> | <code>aws-cdk-lib.aws_dynamodb.Table</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStack.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@horustech/ai-document-processor-cdk.DynamoDbStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="@horustech/ai-document-processor-cdk.DynamoDbStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concrete account (e.g. `585695031111`) or the
   `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into an **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other account-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@horustech/ai-document-processor-cdk.DynamoDbStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@horustech/ai-document-processor-cdk.DynamoDbStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="@horustech/ai-document-processor-cdk.DynamoDbStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@horustech/ai-document-processor-cdk.DynamoDbStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@horustech/ai-document-processor-cdk.DynamoDbStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="@horustech/ai-document-processor-cdk.DynamoDbStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@horustech/ai-document-processor-cdk.DynamoDbStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@horustech/ai-document-processor-cdk.DynamoDbStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="@horustech/ai-document-processor-cdk.DynamoDbStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concrete region (e.g. `us-west-2`) or the `Aws.REGION`
   token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@horustech/ai-document-processor-cdk.DynamoDbStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

An attribute that represents the ID of the stack.

This is a context aware attribute:
- If this is referenced from the parent stack, it will return `{ "Ref": "LogicalIdOfNestedStackResource" }`.
- If this is referenced from the context of the nested stack, it will return `{ "Ref": "AWS::StackId" }`

Example value: `arn:aws:cloudformation:us-east-2:123456789012:stack/mystack-mynestedstack-sggfrhxhum7w/f449b250-b969-11e0-a185-5081d0136786`

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="@horustech/ai-document-processor-cdk.DynamoDbStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

An attribute that represents the name of the nested stack.

This is a context aware attribute:
- If this is referenced from the parent stack, it will return a token that parses the name from the stack ID.
- If this is referenced from the context of the nested stack, it will return `{ "Ref": "AWS::StackName" }`

Example value: `mystack-mynestedstack-sggfrhxhum7w`

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="@horustech/ai-document-processor-cdk.DynamoDbStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@horustech/ai-document-processor-cdk.DynamoDbStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="@horustech/ai-document-processor-cdk.DynamoDbStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="@horustech/ai-document-processor-cdk.DynamoDbStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="@horustech/ai-document-processor-cdk.DynamoDbStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="@horustech/ai-document-processor-cdk.DynamoDbStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="@horustech/ai-document-processor-cdk.DynamoDbStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="@horustech/ai-document-processor-cdk.DynamoDbStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `dataTable`<sup>Required</sup> <a name="dataTable" id="@horustech/ai-document-processor-cdk.DynamoDbStack.property.dataTable"></a>

```typescript
public readonly dataTable: Table;
```

- *Type:* aws-cdk-lib.aws_dynamodb.Table

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@horustech/ai-document-processor-cdk.DynamoDbStack.property.kmsKey"></a>

```typescript
public readonly kmsKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key

---

##### `removalPolicy`<sup>Required</sup> <a name="removalPolicy" id="@horustech/ai-document-processor-cdk.DynamoDbStack.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy

---


### IamStack <a name="IamStack" id="@horustech/ai-document-processor-cdk.IamStack"></a>

#### Initializers <a name="Initializers" id="@horustech/ai-document-processor-cdk.IamStack.Initializer"></a>

```typescript
import { IamStack } from '@horustech/ai-document-processor-cdk'

new IamStack(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@horustech/ai-document-processor-cdk.IamStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@horustech/ai-document-processor-cdk.IamStack.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.addMetadata">addMetadata</a></code> | Adds an arbitrary key-value pair, with information you want to record about the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.addStackTag">addStackTag</a></code> | Configure a stack tag. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.exportStringListValue">exportStringListValue</a></code> | Create a CloudFormation Export for a string list value. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a string value. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.removeStackTag">removeStackTag</a></code> | Remove a stack tag. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.toYamlString">toYamlString</a></code> | Convert an object, potentially containing tokens, to a YAML string. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.setParameter">setParameter</a></code> | Assign a value to one of the nested stack parameters. |

---

##### `toString` <a name="toString" id="@horustech/ai-document-processor-cdk.IamStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="@horustech/ai-document-processor-cdk.IamStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="@horustech/ai-document-processor-cdk.IamStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="@horustech/ai-document-processor-cdk.IamStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="@horustech/ai-document-processor-cdk.IamStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitrary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="@horustech/ai-document-processor-cdk.IamStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@horustech/ai-document-processor-cdk.IamStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addStackTag` <a name="addStackTag" id="@horustech/ai-document-processor-cdk.IamStack.addStackTag"></a>

```typescript
public addStackTag(tagName: string, tagValue: string): void
```

Configure a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="@horustech/ai-document-processor-cdk.IamStack.addStackTag.parameter.tagName"></a>

- *Type:* string

---

###### `tagValue`<sup>Required</sup> <a name="tagValue" id="@horustech/ai-document-processor-cdk.IamStack.addStackTag.parameter.tagValue"></a>

- *Type:* string

---

##### `addTransform` <a name="addTransform" id="@horustech/ai-document-processor-cdk.IamStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="@horustech/ai-document-processor-cdk.IamStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportStringListValue` <a name="exportStringListValue" id="@horustech/ai-document-processor-cdk.IamStack.exportStringListValue"></a>

```typescript
public exportStringListValue(exportedValue: any, options?: ExportValueOptions): string[]
```

Create a CloudFormation Export for a string list value.

Returns a string list representing the corresponding `Fn.importValue()`
expression for this Export. The export expression is automatically wrapped with an
`Fn::Join` and the import value with an `Fn::Split`, since CloudFormation can only
export strings. You can control the name for the export by passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

See `exportValue` for an example of this process.

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@horustech/ai-document-processor-cdk.IamStack.exportStringListValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@horustech/ai-document-processor-cdk.IamStack.exportStringListValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `exportValue` <a name="exportValue" id="@horustech/ai-document-processor-cdk.IamStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a string value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

**Deployment 1: break the relationship**:

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

**Deployment 2: remove the bucket resource**:

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@horustech/ai-document-processor-cdk.IamStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@horustech/ai-document-processor-cdk.IamStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="@horustech/ai-document-processor-cdk.IamStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

  arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="@horustech/ai-document-processor-cdk.IamStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="@horustech/ai-document-processor-cdk.IamStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="@horustech/ai-document-processor-cdk.IamStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="@horustech/ai-document-processor-cdk.IamStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="@horustech/ai-document-processor-cdk.IamStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@horustech/ai-document-processor-cdk.IamStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `removeStackTag` <a name="removeStackTag" id="@horustech/ai-document-processor-cdk.IamStack.removeStackTag"></a>

```typescript
public removeStackTag(tagName: string): void
```

Remove a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="@horustech/ai-document-processor-cdk.IamStack.removeStackTag.parameter.tagName"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="@horustech/ai-document-processor-cdk.IamStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="@horustech/ai-document-processor-cdk.IamStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="@horustech/ai-document-processor-cdk.IamStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="@horustech/ai-document-processor-cdk.IamStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="@horustech/ai-document-processor-cdk.IamStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="@horustech/ai-document-processor-cdk.IamStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.IamStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="@horustech/ai-document-processor-cdk.IamStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="@horustech/ai-document-processor-cdk.IamStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="@horustech/ai-document-processor-cdk.IamStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="@horustech/ai-document-processor-cdk.IamStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.IamStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="@horustech/ai-document-processor-cdk.IamStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `toYamlString` <a name="toYamlString" id="@horustech/ai-document-processor-cdk.IamStack.toYamlString"></a>

```typescript
public toYamlString(obj: any): string
```

Convert an object, potentially containing tokens, to a YAML string.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.IamStack.toYamlString.parameter.obj"></a>

- *Type:* any

---

##### `setParameter` <a name="setParameter" id="@horustech/ai-document-processor-cdk.IamStack.setParameter"></a>

```typescript
public setParameter(name: string, value: string): void
```

Assign a value to one of the nested stack parameters.

###### `name`<sup>Required</sup> <a name="name" id="@horustech/ai-document-processor-cdk.IamStack.setParameter.parameter.name"></a>

- *Type:* string

The parameter name (ID).

---

###### `value`<sup>Required</sup> <a name="value" id="@horustech/ai-document-processor-cdk.IamStack.setParameter.parameter.value"></a>

- *Type:* string

The value to assign.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.isNestedStack">isNestedStack</a></code> | Checks if `x` is an object of type `NestedStack`. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@horustech/ai-document-processor-cdk.IamStack.isConstruct"></a>

```typescript
import { IamStack } from '@horustech/ai-document-processor-cdk'

IamStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.IamStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="@horustech/ai-document-processor-cdk.IamStack.isStack"></a>

```typescript
import { IamStack } from '@horustech/ai-document-processor-cdk'

IamStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.IamStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@horustech/ai-document-processor-cdk.IamStack.of"></a>

```typescript
import { IamStack } from '@horustech/ai-document-processor-cdk'

IamStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="@horustech/ai-document-processor-cdk.IamStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

##### `isNestedStack` <a name="isNestedStack" id="@horustech/ai-document-processor-cdk.IamStack.isNestedStack"></a>

```typescript
import { IamStack } from '@horustech/ai-document-processor-cdk'

IamStack.isNestedStack(x: any)
```

Checks if `x` is an object of type `NestedStack`.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.IamStack.isNestedStack.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.property.stackId">stackId</a></code> | <code>string</code> | An attribute that represents the ID of the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.property.stackName">stackName</a></code> | <code>string</code> | An attribute that represents the name of the nested stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#@horustech/ai-document-processor-cdk.IamStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |

---

##### `node`<sup>Required</sup> <a name="node" id="@horustech/ai-document-processor-cdk.IamStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="@horustech/ai-document-processor-cdk.IamStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concrete account (e.g. `585695031111`) or the
   `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into an **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other account-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@horustech/ai-document-processor-cdk.IamStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@horustech/ai-document-processor-cdk.IamStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="@horustech/ai-document-processor-cdk.IamStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@horustech/ai-document-processor-cdk.IamStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@horustech/ai-document-processor-cdk.IamStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="@horustech/ai-document-processor-cdk.IamStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@horustech/ai-document-processor-cdk.IamStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@horustech/ai-document-processor-cdk.IamStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="@horustech/ai-document-processor-cdk.IamStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concrete region (e.g. `us-west-2`) or the `Aws.REGION`
   token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@horustech/ai-document-processor-cdk.IamStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

An attribute that represents the ID of the stack.

This is a context aware attribute:
- If this is referenced from the parent stack, it will return `{ "Ref": "LogicalIdOfNestedStackResource" }`.
- If this is referenced from the context of the nested stack, it will return `{ "Ref": "AWS::StackId" }`

Example value: `arn:aws:cloudformation:us-east-2:123456789012:stack/mystack-mynestedstack-sggfrhxhum7w/f449b250-b969-11e0-a185-5081d0136786`

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="@horustech/ai-document-processor-cdk.IamStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

An attribute that represents the name of the nested stack.

This is a context aware attribute:
- If this is referenced from the parent stack, it will return a token that parses the name from the stack ID.
- If this is referenced from the context of the nested stack, it will return `{ "Ref": "AWS::StackName" }`

Example value: `mystack-mynestedstack-sggfrhxhum7w`

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="@horustech/ai-document-processor-cdk.IamStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@horustech/ai-document-processor-cdk.IamStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="@horustech/ai-document-processor-cdk.IamStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="@horustech/ai-document-processor-cdk.IamStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="@horustech/ai-document-processor-cdk.IamStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="@horustech/ai-document-processor-cdk.IamStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="@horustech/ai-document-processor-cdk.IamStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="@horustech/ai-document-processor-cdk.IamStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---


### KmsStack <a name="KmsStack" id="@horustech/ai-document-processor-cdk.KmsStack"></a>

#### Initializers <a name="Initializers" id="@horustech/ai-document-processor-cdk.KmsStack.Initializer"></a>

```typescript
import { KmsStack } from '@horustech/ai-document-processor-cdk'

new KmsStack(scope: Construct, id: string, args: KmsStackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.Initializer.parameter.args">args</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.KmsStackProps">KmsStackProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@horustech/ai-document-processor-cdk.KmsStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@horustech/ai-document-processor-cdk.KmsStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@horustech/ai-document-processor-cdk.KmsStack.Initializer.parameter.args"></a>

- *Type:* <a href="#@horustech/ai-document-processor-cdk.KmsStackProps">KmsStackProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.addMetadata">addMetadata</a></code> | Adds an arbitrary key-value pair, with information you want to record about the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.addStackTag">addStackTag</a></code> | Configure a stack tag. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.exportStringListValue">exportStringListValue</a></code> | Create a CloudFormation Export for a string list value. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a string value. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.removeStackTag">removeStackTag</a></code> | Remove a stack tag. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.toYamlString">toYamlString</a></code> | Convert an object, potentially containing tokens, to a YAML string. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.setParameter">setParameter</a></code> | Assign a value to one of the nested stack parameters. |

---

##### `toString` <a name="toString" id="@horustech/ai-document-processor-cdk.KmsStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="@horustech/ai-document-processor-cdk.KmsStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="@horustech/ai-document-processor-cdk.KmsStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="@horustech/ai-document-processor-cdk.KmsStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="@horustech/ai-document-processor-cdk.KmsStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitrary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="@horustech/ai-document-processor-cdk.KmsStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@horustech/ai-document-processor-cdk.KmsStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addStackTag` <a name="addStackTag" id="@horustech/ai-document-processor-cdk.KmsStack.addStackTag"></a>

```typescript
public addStackTag(tagName: string, tagValue: string): void
```

Configure a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="@horustech/ai-document-processor-cdk.KmsStack.addStackTag.parameter.tagName"></a>

- *Type:* string

---

###### `tagValue`<sup>Required</sup> <a name="tagValue" id="@horustech/ai-document-processor-cdk.KmsStack.addStackTag.parameter.tagValue"></a>

- *Type:* string

---

##### `addTransform` <a name="addTransform" id="@horustech/ai-document-processor-cdk.KmsStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="@horustech/ai-document-processor-cdk.KmsStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportStringListValue` <a name="exportStringListValue" id="@horustech/ai-document-processor-cdk.KmsStack.exportStringListValue"></a>

```typescript
public exportStringListValue(exportedValue: any, options?: ExportValueOptions): string[]
```

Create a CloudFormation Export for a string list value.

Returns a string list representing the corresponding `Fn.importValue()`
expression for this Export. The export expression is automatically wrapped with an
`Fn::Join` and the import value with an `Fn::Split`, since CloudFormation can only
export strings. You can control the name for the export by passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

See `exportValue` for an example of this process.

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@horustech/ai-document-processor-cdk.KmsStack.exportStringListValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@horustech/ai-document-processor-cdk.KmsStack.exportStringListValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `exportValue` <a name="exportValue" id="@horustech/ai-document-processor-cdk.KmsStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a string value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

**Deployment 1: break the relationship**:

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

**Deployment 2: remove the bucket resource**:

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@horustech/ai-document-processor-cdk.KmsStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@horustech/ai-document-processor-cdk.KmsStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="@horustech/ai-document-processor-cdk.KmsStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

  arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="@horustech/ai-document-processor-cdk.KmsStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="@horustech/ai-document-processor-cdk.KmsStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="@horustech/ai-document-processor-cdk.KmsStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="@horustech/ai-document-processor-cdk.KmsStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="@horustech/ai-document-processor-cdk.KmsStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@horustech/ai-document-processor-cdk.KmsStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `removeStackTag` <a name="removeStackTag" id="@horustech/ai-document-processor-cdk.KmsStack.removeStackTag"></a>

```typescript
public removeStackTag(tagName: string): void
```

Remove a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="@horustech/ai-document-processor-cdk.KmsStack.removeStackTag.parameter.tagName"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="@horustech/ai-document-processor-cdk.KmsStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="@horustech/ai-document-processor-cdk.KmsStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="@horustech/ai-document-processor-cdk.KmsStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="@horustech/ai-document-processor-cdk.KmsStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="@horustech/ai-document-processor-cdk.KmsStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="@horustech/ai-document-processor-cdk.KmsStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.KmsStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="@horustech/ai-document-processor-cdk.KmsStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="@horustech/ai-document-processor-cdk.KmsStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="@horustech/ai-document-processor-cdk.KmsStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="@horustech/ai-document-processor-cdk.KmsStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.KmsStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="@horustech/ai-document-processor-cdk.KmsStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `toYamlString` <a name="toYamlString" id="@horustech/ai-document-processor-cdk.KmsStack.toYamlString"></a>

```typescript
public toYamlString(obj: any): string
```

Convert an object, potentially containing tokens, to a YAML string.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.KmsStack.toYamlString.parameter.obj"></a>

- *Type:* any

---

##### `setParameter` <a name="setParameter" id="@horustech/ai-document-processor-cdk.KmsStack.setParameter"></a>

```typescript
public setParameter(name: string, value: string): void
```

Assign a value to one of the nested stack parameters.

###### `name`<sup>Required</sup> <a name="name" id="@horustech/ai-document-processor-cdk.KmsStack.setParameter.parameter.name"></a>

- *Type:* string

The parameter name (ID).

---

###### `value`<sup>Required</sup> <a name="value" id="@horustech/ai-document-processor-cdk.KmsStack.setParameter.parameter.value"></a>

- *Type:* string

The value to assign.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.isNestedStack">isNestedStack</a></code> | Checks if `x` is an object of type `NestedStack`. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@horustech/ai-document-processor-cdk.KmsStack.isConstruct"></a>

```typescript
import { KmsStack } from '@horustech/ai-document-processor-cdk'

KmsStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.KmsStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="@horustech/ai-document-processor-cdk.KmsStack.isStack"></a>

```typescript
import { KmsStack } from '@horustech/ai-document-processor-cdk'

KmsStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.KmsStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@horustech/ai-document-processor-cdk.KmsStack.of"></a>

```typescript
import { KmsStack } from '@horustech/ai-document-processor-cdk'

KmsStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="@horustech/ai-document-processor-cdk.KmsStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

##### `isNestedStack` <a name="isNestedStack" id="@horustech/ai-document-processor-cdk.KmsStack.isNestedStack"></a>

```typescript
import { KmsStack } from '@horustech/ai-document-processor-cdk'

KmsStack.isNestedStack(x: any)
```

Checks if `x` is an object of type `NestedStack`.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.KmsStack.isNestedStack.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.property.stackId">stackId</a></code> | <code>string</code> | An attribute that represents the ID of the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.property.stackName">stackName</a></code> | <code>string</code> | An attribute that represents the name of the nested stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStack.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@horustech/ai-document-processor-cdk.KmsStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="@horustech/ai-document-processor-cdk.KmsStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concrete account (e.g. `585695031111`) or the
   `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into an **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other account-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@horustech/ai-document-processor-cdk.KmsStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@horustech/ai-document-processor-cdk.KmsStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="@horustech/ai-document-processor-cdk.KmsStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@horustech/ai-document-processor-cdk.KmsStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@horustech/ai-document-processor-cdk.KmsStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="@horustech/ai-document-processor-cdk.KmsStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@horustech/ai-document-processor-cdk.KmsStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@horustech/ai-document-processor-cdk.KmsStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="@horustech/ai-document-processor-cdk.KmsStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concrete region (e.g. `us-west-2`) or the `Aws.REGION`
   token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@horustech/ai-document-processor-cdk.KmsStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

An attribute that represents the ID of the stack.

This is a context aware attribute:
- If this is referenced from the parent stack, it will return `{ "Ref": "LogicalIdOfNestedStackResource" }`.
- If this is referenced from the context of the nested stack, it will return `{ "Ref": "AWS::StackId" }`

Example value: `arn:aws:cloudformation:us-east-2:123456789012:stack/mystack-mynestedstack-sggfrhxhum7w/f449b250-b969-11e0-a185-5081d0136786`

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="@horustech/ai-document-processor-cdk.KmsStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

An attribute that represents the name of the nested stack.

This is a context aware attribute:
- If this is referenced from the parent stack, it will return a token that parses the name from the stack ID.
- If this is referenced from the context of the nested stack, it will return `{ "Ref": "AWS::StackName" }`

Example value: `mystack-mynestedstack-sggfrhxhum7w`

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="@horustech/ai-document-processor-cdk.KmsStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@horustech/ai-document-processor-cdk.KmsStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="@horustech/ai-document-processor-cdk.KmsStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="@horustech/ai-document-processor-cdk.KmsStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="@horustech/ai-document-processor-cdk.KmsStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="@horustech/ai-document-processor-cdk.KmsStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="@horustech/ai-document-processor-cdk.KmsStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="@horustech/ai-document-processor-cdk.KmsStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@horustech/ai-document-processor-cdk.KmsStack.property.kmsKey"></a>

```typescript
public readonly kmsKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key

---

##### `removalPolicy`<sup>Required</sup> <a name="removalPolicy" id="@horustech/ai-document-processor-cdk.KmsStack.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy

---


### ProdStage <a name="ProdStage" id="@horustech/ai-document-processor-cdk.ProdStage"></a>

#### Initializers <a name="Initializers" id="@horustech/ai-document-processor-cdk.ProdStage.Initializer"></a>

```typescript
import { ProdStage } from '@horustech/ai-document-processor-cdk'

new ProdStage(scope: Construct, id: string, args: StackInputs, props?: StackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.ProdStage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ProdStage.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ProdStage.Initializer.parameter.args">args</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.StackInputs">StackInputs</a></code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ProdStage.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.StackProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@horustech/ai-document-processor-cdk.ProdStage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@horustech/ai-document-processor-cdk.ProdStage.Initializer.parameter.id"></a>

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@horustech/ai-document-processor-cdk.ProdStage.Initializer.parameter.args"></a>

- *Type:* <a href="#@horustech/ai-document-processor-cdk.StackInputs">StackInputs</a>

---

##### `props`<sup>Optional</sup> <a name="props" id="@horustech/ai-document-processor-cdk.ProdStage.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.StackProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.ProdStage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.ProdStage.synth">synth</a></code> | Synthesize this stage into a cloud assembly. |
| <code><a href="#@horustech/ai-document-processor-cdk.ProdStage.getMarketplaceOutputs">getMarketplaceOutputs</a></code> | Get the main stack outputs for marketplace documentation. |

---

##### `toString` <a name="toString" id="@horustech/ai-document-processor-cdk.ProdStage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `synth` <a name="synth" id="@horustech/ai-document-processor-cdk.ProdStage.synth"></a>

```typescript
public synth(options?: StageSynthesisOptions): CloudAssembly
```

Synthesize this stage into a cloud assembly.

Once an assembly has been synthesized, it cannot be modified. Subsequent
calls will return the same assembly.

###### `options`<sup>Optional</sup> <a name="options" id="@horustech/ai-document-processor-cdk.ProdStage.synth.parameter.options"></a>

- *Type:* aws-cdk-lib.StageSynthesisOptions

---

##### `getMarketplaceOutputs` <a name="getMarketplaceOutputs" id="@horustech/ai-document-processor-cdk.ProdStage.getMarketplaceOutputs"></a>

```typescript
public getMarketplaceOutputs(backendAppStack: BackendAppStack): {[ key: string ]: string}
```

Get the main stack outputs for marketplace documentation.

###### `backendAppStack`<sup>Required</sup> <a name="backendAppStack" id="@horustech/ai-document-processor-cdk.ProdStage.getMarketplaceOutputs.parameter.backendAppStack"></a>

- *Type:* <a href="#@horustech/ai-document-processor-cdk.BackendAppStack">BackendAppStack</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.ProdStage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.ProdStage.isStage">isStage</a></code> | Test whether the given construct is a stage. |
| <code><a href="#@horustech/ai-document-processor-cdk.ProdStage.of">of</a></code> | Return the stage this construct is contained with, if available. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@horustech/ai-document-processor-cdk.ProdStage.isConstruct"></a>

```typescript
import { ProdStage } from '@horustech/ai-document-processor-cdk'

ProdStage.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.ProdStage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStage` <a name="isStage" id="@horustech/ai-document-processor-cdk.ProdStage.isStage"></a>

```typescript
import { ProdStage } from '@horustech/ai-document-processor-cdk'

ProdStage.isStage(x: any)
```

Test whether the given construct is a stage.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.ProdStage.isStage.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@horustech/ai-document-processor-cdk.ProdStage.of"></a>

```typescript
import { ProdStage } from '@horustech/ai-document-processor-cdk'

ProdStage.of(construct: IConstruct)
```

Return the stage this construct is contained with, if available.

If called
on a nested stage, returns its parent.

###### `construct`<sup>Required</sup> <a name="construct" id="@horustech/ai-document-processor-cdk.ProdStage.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.ProdStage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@horustech/ai-document-processor-cdk.ProdStage.property.artifactId">artifactId</a></code> | <code>string</code> | Artifact ID of the assembly if it is a nested stage. The root stage (app) will return an empty string. |
| <code><a href="#@horustech/ai-document-processor-cdk.ProdStage.property.assetOutdir">assetOutdir</a></code> | <code>string</code> | The cloud assembly asset output directory. |
| <code><a href="#@horustech/ai-document-processor-cdk.ProdStage.property.outdir">outdir</a></code> | <code>string</code> | The cloud assembly output directory. |
| <code><a href="#@horustech/ai-document-processor-cdk.ProdStage.property.policyValidationBeta1">policyValidationBeta1</a></code> | <code>aws-cdk-lib.IPolicyValidationPluginBeta1[]</code> | Validation plugins to run during synthesis. |
| <code><a href="#@horustech/ai-document-processor-cdk.ProdStage.property.stageName">stageName</a></code> | <code>string</code> | The name of the stage. |
| <code><a href="#@horustech/ai-document-processor-cdk.ProdStage.property.account">account</a></code> | <code>string</code> | The default account for all resources defined within this stage. |
| <code><a href="#@horustech/ai-document-processor-cdk.ProdStage.property.parentStage">parentStage</a></code> | <code>aws-cdk-lib.Stage</code> | The parent stage or `undefined` if this is the app. |
| <code><a href="#@horustech/ai-document-processor-cdk.ProdStage.property.region">region</a></code> | <code>string</code> | The default region for all resources defined within this stage. |

---

##### `node`<sup>Required</sup> <a name="node" id="@horustech/ai-document-processor-cdk.ProdStage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@horustech/ai-document-processor-cdk.ProdStage.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

Artifact ID of the assembly if it is a nested stage. The root stage (app) will return an empty string.

Derived from the construct path.

---

##### `assetOutdir`<sup>Required</sup> <a name="assetOutdir" id="@horustech/ai-document-processor-cdk.ProdStage.property.assetOutdir"></a>

```typescript
public readonly assetOutdir: string;
```

- *Type:* string

The cloud assembly asset output directory.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@horustech/ai-document-processor-cdk.ProdStage.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

The cloud assembly output directory.

---

##### `policyValidationBeta1`<sup>Required</sup> <a name="policyValidationBeta1" id="@horustech/ai-document-processor-cdk.ProdStage.property.policyValidationBeta1"></a>

```typescript
public readonly policyValidationBeta1: IPolicyValidationPluginBeta1[];
```

- *Type:* aws-cdk-lib.IPolicyValidationPluginBeta1[]
- *Default:* no validation plugins are used

Validation plugins to run during synthesis.

If any plugin reports any violation,
synthesis will be interrupted and the report displayed to the user.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@horustech/ai-document-processor-cdk.ProdStage.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The name of the stage.

Based on names of the parent stages separated by
hypens.

---

##### `account`<sup>Optional</sup> <a name="account" id="@horustech/ai-document-processor-cdk.ProdStage.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The default account for all resources defined within this stage.

---

##### `parentStage`<sup>Optional</sup> <a name="parentStage" id="@horustech/ai-document-processor-cdk.ProdStage.property.parentStage"></a>

```typescript
public readonly parentStage: Stage;
```

- *Type:* aws-cdk-lib.Stage

The parent stage or `undefined` if this is the app.

*

---

##### `region`<sup>Optional</sup> <a name="region" id="@horustech/ai-document-processor-cdk.ProdStage.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The default region for all resources defined within this stage.

---


### S3Stack <a name="S3Stack" id="@horustech/ai-document-processor-cdk.S3Stack"></a>

#### Initializers <a name="Initializers" id="@horustech/ai-document-processor-cdk.S3Stack.Initializer"></a>

```typescript
import { S3Stack } from '@horustech/ai-document-processor-cdk'

new S3Stack(scope: Construct, id: string, args: S3StackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.Initializer.parameter.args">args</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.S3StackProps">S3StackProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@horustech/ai-document-processor-cdk.S3Stack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@horustech/ai-document-processor-cdk.S3Stack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@horustech/ai-document-processor-cdk.S3Stack.Initializer.parameter.args"></a>

- *Type:* <a href="#@horustech/ai-document-processor-cdk.S3StackProps">S3StackProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.addMetadata">addMetadata</a></code> | Adds an arbitrary key-value pair, with information you want to record about the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.addStackTag">addStackTag</a></code> | Configure a stack tag. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.exportStringListValue">exportStringListValue</a></code> | Create a CloudFormation Export for a string list value. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a string value. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.removeStackTag">removeStackTag</a></code> | Remove a stack tag. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.toYamlString">toYamlString</a></code> | Convert an object, potentially containing tokens, to a YAML string. |

---

##### `toString` <a name="toString" id="@horustech/ai-document-processor-cdk.S3Stack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="@horustech/ai-document-processor-cdk.S3Stack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="@horustech/ai-document-processor-cdk.S3Stack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="@horustech/ai-document-processor-cdk.S3Stack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="@horustech/ai-document-processor-cdk.S3Stack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitrary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="@horustech/ai-document-processor-cdk.S3Stack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@horustech/ai-document-processor-cdk.S3Stack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addStackTag` <a name="addStackTag" id="@horustech/ai-document-processor-cdk.S3Stack.addStackTag"></a>

```typescript
public addStackTag(tagName: string, tagValue: string): void
```

Configure a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="@horustech/ai-document-processor-cdk.S3Stack.addStackTag.parameter.tagName"></a>

- *Type:* string

---

###### `tagValue`<sup>Required</sup> <a name="tagValue" id="@horustech/ai-document-processor-cdk.S3Stack.addStackTag.parameter.tagValue"></a>

- *Type:* string

---

##### `addTransform` <a name="addTransform" id="@horustech/ai-document-processor-cdk.S3Stack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="@horustech/ai-document-processor-cdk.S3Stack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportStringListValue` <a name="exportStringListValue" id="@horustech/ai-document-processor-cdk.S3Stack.exportStringListValue"></a>

```typescript
public exportStringListValue(exportedValue: any, options?: ExportValueOptions): string[]
```

Create a CloudFormation Export for a string list value.

Returns a string list representing the corresponding `Fn.importValue()`
expression for this Export. The export expression is automatically wrapped with an
`Fn::Join` and the import value with an `Fn::Split`, since CloudFormation can only
export strings. You can control the name for the export by passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

See `exportValue` for an example of this process.

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@horustech/ai-document-processor-cdk.S3Stack.exportStringListValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@horustech/ai-document-processor-cdk.S3Stack.exportStringListValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `exportValue` <a name="exportValue" id="@horustech/ai-document-processor-cdk.S3Stack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a string value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

**Deployment 1: break the relationship**:

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

**Deployment 2: remove the bucket resource**:

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@horustech/ai-document-processor-cdk.S3Stack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@horustech/ai-document-processor-cdk.S3Stack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="@horustech/ai-document-processor-cdk.S3Stack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

  arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="@horustech/ai-document-processor-cdk.S3Stack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="@horustech/ai-document-processor-cdk.S3Stack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="@horustech/ai-document-processor-cdk.S3Stack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="@horustech/ai-document-processor-cdk.S3Stack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="@horustech/ai-document-processor-cdk.S3Stack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@horustech/ai-document-processor-cdk.S3Stack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `removeStackTag` <a name="removeStackTag" id="@horustech/ai-document-processor-cdk.S3Stack.removeStackTag"></a>

```typescript
public removeStackTag(tagName: string): void
```

Remove a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="@horustech/ai-document-processor-cdk.S3Stack.removeStackTag.parameter.tagName"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="@horustech/ai-document-processor-cdk.S3Stack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="@horustech/ai-document-processor-cdk.S3Stack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="@horustech/ai-document-processor-cdk.S3Stack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="@horustech/ai-document-processor-cdk.S3Stack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="@horustech/ai-document-processor-cdk.S3Stack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="@horustech/ai-document-processor-cdk.S3Stack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.S3Stack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="@horustech/ai-document-processor-cdk.S3Stack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="@horustech/ai-document-processor-cdk.S3Stack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="@horustech/ai-document-processor-cdk.S3Stack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="@horustech/ai-document-processor-cdk.S3Stack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.S3Stack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="@horustech/ai-document-processor-cdk.S3Stack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `toYamlString` <a name="toYamlString" id="@horustech/ai-document-processor-cdk.S3Stack.toYamlString"></a>

```typescript
public toYamlString(obj: any): string
```

Convert an object, potentially containing tokens, to a YAML string.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.S3Stack.toYamlString.parameter.obj"></a>

- *Type:* any

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@horustech/ai-document-processor-cdk.S3Stack.isConstruct"></a>

```typescript
import { S3Stack } from '@horustech/ai-document-processor-cdk'

S3Stack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.S3Stack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="@horustech/ai-document-processor-cdk.S3Stack.isStack"></a>

```typescript
import { S3Stack } from '@horustech/ai-document-processor-cdk'

S3Stack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.S3Stack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@horustech/ai-document-processor-cdk.S3Stack.of"></a>

```typescript
import { S3Stack } from '@horustech/ai-document-processor-cdk'

S3Stack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="@horustech/ai-document-processor-cdk.S3Stack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.property.stackId">stackId</a></code> | <code>string</code> | The ID of the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.property.stackName">stackName</a></code> | <code>string</code> | The concrete CloudFormation physical stack name. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.property.inputBucket">inputBucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.property.outputBucket">outputBucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.S3Stack.property.sageMakerAsyncBucket">sageMakerAsyncBucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@horustech/ai-document-processor-cdk.S3Stack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="@horustech/ai-document-processor-cdk.S3Stack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concrete account (e.g. `585695031111`) or the
   `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into an **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other account-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@horustech/ai-document-processor-cdk.S3Stack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@horustech/ai-document-processor-cdk.S3Stack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="@horustech/ai-document-processor-cdk.S3Stack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@horustech/ai-document-processor-cdk.S3Stack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@horustech/ai-document-processor-cdk.S3Stack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="@horustech/ai-document-processor-cdk.S3Stack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@horustech/ai-document-processor-cdk.S3Stack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@horustech/ai-document-processor-cdk.S3Stack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="@horustech/ai-document-processor-cdk.S3Stack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concrete region (e.g. `us-west-2`) or the `Aws.REGION`
   token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@horustech/ai-document-processor-cdk.S3Stack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The ID of the stack.

---

*Example*

```typescript
// After resolving, looks like
'arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123'
```


##### `stackName`<sup>Required</sup> <a name="stackName" id="@horustech/ai-document-processor-cdk.S3Stack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The concrete CloudFormation physical stack name.

This is either the name defined explicitly in the `stackName` prop or
allocated based on the stack's location in the construct tree. Stacks that
are directly defined under the app use their construct `id` as their stack
name. Stacks that are defined deeper within the tree will use a hashed naming
scheme based on the construct path to ensure uniqueness.

If you wish to obtain the deploy-time AWS::StackName intrinsic,
you can use `Aws.STACK_NAME` directly.

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="@horustech/ai-document-processor-cdk.S3Stack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@horustech/ai-document-processor-cdk.S3Stack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="@horustech/ai-document-processor-cdk.S3Stack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="@horustech/ai-document-processor-cdk.S3Stack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="@horustech/ai-document-processor-cdk.S3Stack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="@horustech/ai-document-processor-cdk.S3Stack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="@horustech/ai-document-processor-cdk.S3Stack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="@horustech/ai-document-processor-cdk.S3Stack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `inputBucket`<sup>Required</sup> <a name="inputBucket" id="@horustech/ai-document-processor-cdk.S3Stack.property.inputBucket"></a>

```typescript
public readonly inputBucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@horustech/ai-document-processor-cdk.S3Stack.property.kmsKey"></a>

```typescript
public readonly kmsKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key

---

##### `outputBucket`<sup>Required</sup> <a name="outputBucket" id="@horustech/ai-document-processor-cdk.S3Stack.property.outputBucket"></a>

```typescript
public readonly outputBucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

---

##### `removalPolicy`<sup>Required</sup> <a name="removalPolicy" id="@horustech/ai-document-processor-cdk.S3Stack.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `sageMakerAsyncBucket`<sup>Required</sup> <a name="sageMakerAsyncBucket" id="@horustech/ai-document-processor-cdk.S3Stack.property.sageMakerAsyncBucket"></a>

```typescript
public readonly sageMakerAsyncBucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

---


### SageMakerStack <a name="SageMakerStack" id="@horustech/ai-document-processor-cdk.SageMakerStack"></a>

#### Initializers <a name="Initializers" id="@horustech/ai-document-processor-cdk.SageMakerStack.Initializer"></a>

```typescript
import { SageMakerStack } from '@horustech/ai-document-processor-cdk'

new SageMakerStack(scope: Construct, id: string, props: LlamaNemotronStackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.Initializer.parameter.props">props</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.LlamaNemotronStackProps">LlamaNemotronStackProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@horustech/ai-document-processor-cdk.SageMakerStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@horustech/ai-document-processor-cdk.SageMakerStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@horustech/ai-document-processor-cdk.SageMakerStack.Initializer.parameter.props"></a>

- *Type:* <a href="#@horustech/ai-document-processor-cdk.LlamaNemotronStackProps">LlamaNemotronStackProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.addMetadata">addMetadata</a></code> | Adds an arbitrary key-value pair, with information you want to record about the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.addStackTag">addStackTag</a></code> | Configure a stack tag. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.exportStringListValue">exportStringListValue</a></code> | Create a CloudFormation Export for a string list value. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a string value. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.removeStackTag">removeStackTag</a></code> | Remove a stack tag. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.toYamlString">toYamlString</a></code> | Convert an object, potentially containing tokens, to a YAML string. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.setParameter">setParameter</a></code> | Assign a value to one of the nested stack parameters. |

---

##### `toString` <a name="toString" id="@horustech/ai-document-processor-cdk.SageMakerStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="@horustech/ai-document-processor-cdk.SageMakerStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="@horustech/ai-document-processor-cdk.SageMakerStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="@horustech/ai-document-processor-cdk.SageMakerStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="@horustech/ai-document-processor-cdk.SageMakerStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitrary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="@horustech/ai-document-processor-cdk.SageMakerStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@horustech/ai-document-processor-cdk.SageMakerStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addStackTag` <a name="addStackTag" id="@horustech/ai-document-processor-cdk.SageMakerStack.addStackTag"></a>

```typescript
public addStackTag(tagName: string, tagValue: string): void
```

Configure a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="@horustech/ai-document-processor-cdk.SageMakerStack.addStackTag.parameter.tagName"></a>

- *Type:* string

---

###### `tagValue`<sup>Required</sup> <a name="tagValue" id="@horustech/ai-document-processor-cdk.SageMakerStack.addStackTag.parameter.tagValue"></a>

- *Type:* string

---

##### `addTransform` <a name="addTransform" id="@horustech/ai-document-processor-cdk.SageMakerStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="@horustech/ai-document-processor-cdk.SageMakerStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportStringListValue` <a name="exportStringListValue" id="@horustech/ai-document-processor-cdk.SageMakerStack.exportStringListValue"></a>

```typescript
public exportStringListValue(exportedValue: any, options?: ExportValueOptions): string[]
```

Create a CloudFormation Export for a string list value.

Returns a string list representing the corresponding `Fn.importValue()`
expression for this Export. The export expression is automatically wrapped with an
`Fn::Join` and the import value with an `Fn::Split`, since CloudFormation can only
export strings. You can control the name for the export by passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

See `exportValue` for an example of this process.

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@horustech/ai-document-processor-cdk.SageMakerStack.exportStringListValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@horustech/ai-document-processor-cdk.SageMakerStack.exportStringListValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `exportValue` <a name="exportValue" id="@horustech/ai-document-processor-cdk.SageMakerStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a string value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

**Deployment 1: break the relationship**:

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

**Deployment 2: remove the bucket resource**:

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@horustech/ai-document-processor-cdk.SageMakerStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@horustech/ai-document-processor-cdk.SageMakerStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="@horustech/ai-document-processor-cdk.SageMakerStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

  arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="@horustech/ai-document-processor-cdk.SageMakerStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="@horustech/ai-document-processor-cdk.SageMakerStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="@horustech/ai-document-processor-cdk.SageMakerStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="@horustech/ai-document-processor-cdk.SageMakerStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="@horustech/ai-document-processor-cdk.SageMakerStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@horustech/ai-document-processor-cdk.SageMakerStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `removeStackTag` <a name="removeStackTag" id="@horustech/ai-document-processor-cdk.SageMakerStack.removeStackTag"></a>

```typescript
public removeStackTag(tagName: string): void
```

Remove a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="@horustech/ai-document-processor-cdk.SageMakerStack.removeStackTag.parameter.tagName"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="@horustech/ai-document-processor-cdk.SageMakerStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="@horustech/ai-document-processor-cdk.SageMakerStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="@horustech/ai-document-processor-cdk.SageMakerStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="@horustech/ai-document-processor-cdk.SageMakerStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="@horustech/ai-document-processor-cdk.SageMakerStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="@horustech/ai-document-processor-cdk.SageMakerStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.SageMakerStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="@horustech/ai-document-processor-cdk.SageMakerStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="@horustech/ai-document-processor-cdk.SageMakerStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="@horustech/ai-document-processor-cdk.SageMakerStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="@horustech/ai-document-processor-cdk.SageMakerStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.SageMakerStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="@horustech/ai-document-processor-cdk.SageMakerStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `toYamlString` <a name="toYamlString" id="@horustech/ai-document-processor-cdk.SageMakerStack.toYamlString"></a>

```typescript
public toYamlString(obj: any): string
```

Convert an object, potentially containing tokens, to a YAML string.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.SageMakerStack.toYamlString.parameter.obj"></a>

- *Type:* any

---

##### `setParameter` <a name="setParameter" id="@horustech/ai-document-processor-cdk.SageMakerStack.setParameter"></a>

```typescript
public setParameter(name: string, value: string): void
```

Assign a value to one of the nested stack parameters.

###### `name`<sup>Required</sup> <a name="name" id="@horustech/ai-document-processor-cdk.SageMakerStack.setParameter.parameter.name"></a>

- *Type:* string

The parameter name (ID).

---

###### `value`<sup>Required</sup> <a name="value" id="@horustech/ai-document-processor-cdk.SageMakerStack.setParameter.parameter.value"></a>

- *Type:* string

The value to assign.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.isNestedStack">isNestedStack</a></code> | Checks if `x` is an object of type `NestedStack`. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@horustech/ai-document-processor-cdk.SageMakerStack.isConstruct"></a>

```typescript
import { SageMakerStack } from '@horustech/ai-document-processor-cdk'

SageMakerStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.SageMakerStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="@horustech/ai-document-processor-cdk.SageMakerStack.isStack"></a>

```typescript
import { SageMakerStack } from '@horustech/ai-document-processor-cdk'

SageMakerStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.SageMakerStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@horustech/ai-document-processor-cdk.SageMakerStack.of"></a>

```typescript
import { SageMakerStack } from '@horustech/ai-document-processor-cdk'

SageMakerStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="@horustech/ai-document-processor-cdk.SageMakerStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

##### `isNestedStack` <a name="isNestedStack" id="@horustech/ai-document-processor-cdk.SageMakerStack.isNestedStack"></a>

```typescript
import { SageMakerStack } from '@horustech/ai-document-processor-cdk'

SageMakerStack.isNestedStack(x: any)
```

Checks if `x` is an object of type `NestedStack`.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.SageMakerStack.isNestedStack.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.stackId">stackId</a></code> | <code>string</code> | An attribute that represents the ID of the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.stackName">stackName</a></code> | <code>string</code> | An attribute that represents the name of the nested stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.modelName">modelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.sageMakerAsyncBucket">sageMakerAsyncBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.inferenceType">inferenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.initialInstanceCount">initialInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerStack.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concrete account (e.g. `585695031111`) or the
   `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into an **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other account-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concrete region (e.g. `us-west-2`) or the `Aws.REGION`
   token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

An attribute that represents the ID of the stack.

This is a context aware attribute:
- If this is referenced from the parent stack, it will return `{ "Ref": "LogicalIdOfNestedStackResource" }`.
- If this is referenced from the context of the nested stack, it will return `{ "Ref": "AWS::StackId" }`

Example value: `arn:aws:cloudformation:us-east-2:123456789012:stack/mystack-mynestedstack-sggfrhxhum7w/f449b250-b969-11e0-a185-5081d0136786`

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

An attribute that represents the name of the nested stack.

This is a context aware attribute:
- If this is referenced from the parent stack, it will return a token that parses the name from the stack ID.
- If this is referenced from the context of the nested stack, it will return `{ "Ref": "AWS::StackName" }`

Example value: `mystack-mynestedstack-sggfrhxhum7w`

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.kmsKey"></a>

```typescript
public readonly kmsKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

---

##### `removalPolicy`<sup>Required</sup> <a name="removalPolicy" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `sageMakerAsyncBucket`<sup>Required</sup> <a name="sageMakerAsyncBucket" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.sageMakerAsyncBucket"></a>

```typescript
public readonly sageMakerAsyncBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `inferenceType`<sup>Optional</sup> <a name="inferenceType" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.inferenceType"></a>

```typescript
public readonly inferenceType: string;
```

- *Type:* string

---

##### `initialInstanceCount`<sup>Optional</sup> <a name="initialInstanceCount" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.initialInstanceCount"></a>

```typescript
public readonly initialInstanceCount: number;
```

- *Type:* number

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@horustech/ai-document-processor-cdk.SageMakerStack.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---


### Secret <a name="Secret" id="@horustech/ai-document-processor-cdk.Secret"></a>

#### Initializers <a name="Initializers" id="@horustech/ai-document-processor-cdk.Secret.Initializer"></a>

```typescript
import { Secret } from '@horustech/ai-document-processor-cdk'

new Secret(scope: Construct, id: string, props: SecretProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.Secret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.Secret.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.Secret.Initializer.parameter.props">props</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.SecretProps">SecretProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@horustech/ai-document-processor-cdk.Secret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@horustech/ai-document-processor-cdk.Secret.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@horustech/ai-document-processor-cdk.Secret.Initializer.parameter.props"></a>

- *Type:* <a href="#@horustech/ai-document-processor-cdk.SecretProps">SecretProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.Secret.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@horustech/ai-document-processor-cdk.Secret.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.Secret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@horustech/ai-document-processor-cdk.Secret.isConstruct"></a>

```typescript
import { Secret } from '@horustech/ai-document-processor-cdk'

Secret.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.Secret.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.Secret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@horustech/ai-document-processor-cdk.Secret.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.Secret.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@horustech/ai-document-processor-cdk.Secret.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@horustech/ai-document-processor-cdk.Secret.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@horustech/ai-document-processor-cdk.Secret.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---


### Stack <a name="Stack" id="@horustech/ai-document-processor-cdk.Stack"></a>

- *Implements:* aws-cdk-lib.ITaggable

A root construct which represents a single CloudFormation stack.

#### Initializers <a name="Initializers" id="@horustech/ai-document-processor-cdk.Stack.Initializer"></a>

```typescript
import { Stack } from '@horustech/ai-document-processor-cdk'

new Stack(scope?: Construct, id?: string, props?: StackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | Parent of this stack, usually an `App` or a `Stage`, but could be any construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.Initializer.parameter.id">id</a></code> | <code>string</code> | The construct ID of this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.StackProps</code> | Stack properties. |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@horustech/ai-document-processor-cdk.Stack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

Parent of this stack, usually an `App` or a `Stage`, but could be any construct.

---

##### `id`<sup>Optional</sup> <a name="id" id="@horustech/ai-document-processor-cdk.Stack.Initializer.parameter.id"></a>

- *Type:* string

The construct ID of this stack.

If `stackName` is not explicitly
defined, this id (and any parent IDs) will be used to determine the
physical ID of the stack.

---

##### `props`<sup>Optional</sup> <a name="props" id="@horustech/ai-document-processor-cdk.Stack.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.StackProps

Stack properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.addMetadata">addMetadata</a></code> | Adds an arbitrary key-value pair, with information you want to record about the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.addStackTag">addStackTag</a></code> | Configure a stack tag. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.exportStringListValue">exportStringListValue</a></code> | Create a CloudFormation Export for a string list value. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a string value. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.removeStackTag">removeStackTag</a></code> | Remove a stack tag. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.toYamlString">toYamlString</a></code> | Convert an object, potentially containing tokens, to a YAML string. |

---

##### `toString` <a name="toString" id="@horustech/ai-document-processor-cdk.Stack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="@horustech/ai-document-processor-cdk.Stack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="@horustech/ai-document-processor-cdk.Stack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="@horustech/ai-document-processor-cdk.Stack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="@horustech/ai-document-processor-cdk.Stack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitrary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="@horustech/ai-document-processor-cdk.Stack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@horustech/ai-document-processor-cdk.Stack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addStackTag` <a name="addStackTag" id="@horustech/ai-document-processor-cdk.Stack.addStackTag"></a>

```typescript
public addStackTag(tagName: string, tagValue: string): void
```

Configure a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="@horustech/ai-document-processor-cdk.Stack.addStackTag.parameter.tagName"></a>

- *Type:* string

---

###### `tagValue`<sup>Required</sup> <a name="tagValue" id="@horustech/ai-document-processor-cdk.Stack.addStackTag.parameter.tagValue"></a>

- *Type:* string

---

##### `addTransform` <a name="addTransform" id="@horustech/ai-document-processor-cdk.Stack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="@horustech/ai-document-processor-cdk.Stack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportStringListValue` <a name="exportStringListValue" id="@horustech/ai-document-processor-cdk.Stack.exportStringListValue"></a>

```typescript
public exportStringListValue(exportedValue: any, options?: ExportValueOptions): string[]
```

Create a CloudFormation Export for a string list value.

Returns a string list representing the corresponding `Fn.importValue()`
expression for this Export. The export expression is automatically wrapped with an
`Fn::Join` and the import value with an `Fn::Split`, since CloudFormation can only
export strings. You can control the name for the export by passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

See `exportValue` for an example of this process.

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@horustech/ai-document-processor-cdk.Stack.exportStringListValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@horustech/ai-document-processor-cdk.Stack.exportStringListValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `exportValue` <a name="exportValue" id="@horustech/ai-document-processor-cdk.Stack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a string value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

**Deployment 1: break the relationship**:

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

**Deployment 2: remove the bucket resource**:

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@horustech/ai-document-processor-cdk.Stack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@horustech/ai-document-processor-cdk.Stack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="@horustech/ai-document-processor-cdk.Stack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

  arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="@horustech/ai-document-processor-cdk.Stack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="@horustech/ai-document-processor-cdk.Stack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="@horustech/ai-document-processor-cdk.Stack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="@horustech/ai-document-processor-cdk.Stack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="@horustech/ai-document-processor-cdk.Stack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@horustech/ai-document-processor-cdk.Stack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `removeStackTag` <a name="removeStackTag" id="@horustech/ai-document-processor-cdk.Stack.removeStackTag"></a>

```typescript
public removeStackTag(tagName: string): void
```

Remove a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="@horustech/ai-document-processor-cdk.Stack.removeStackTag.parameter.tagName"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="@horustech/ai-document-processor-cdk.Stack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="@horustech/ai-document-processor-cdk.Stack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="@horustech/ai-document-processor-cdk.Stack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="@horustech/ai-document-processor-cdk.Stack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="@horustech/ai-document-processor-cdk.Stack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="@horustech/ai-document-processor-cdk.Stack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.Stack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="@horustech/ai-document-processor-cdk.Stack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="@horustech/ai-document-processor-cdk.Stack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="@horustech/ai-document-processor-cdk.Stack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="@horustech/ai-document-processor-cdk.Stack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.Stack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="@horustech/ai-document-processor-cdk.Stack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `toYamlString` <a name="toYamlString" id="@horustech/ai-document-processor-cdk.Stack.toYamlString"></a>

```typescript
public toYamlString(obj: any): string
```

Convert an object, potentially containing tokens, to a YAML string.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.Stack.toYamlString.parameter.obj"></a>

- *Type:* any

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@horustech/ai-document-processor-cdk.Stack.isConstruct"></a>

```typescript
import { Stack } from '@horustech/ai-document-processor-cdk'

Stack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.Stack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="@horustech/ai-document-processor-cdk.Stack.isStack"></a>

```typescript
import { Stack } from '@horustech/ai-document-processor-cdk'

Stack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.Stack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@horustech/ai-document-processor-cdk.Stack.of"></a>

```typescript
import { Stack } from '@horustech/ai-document-processor-cdk'

Stack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="@horustech/ai-document-processor-cdk.Stack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.property.stackId">stackId</a></code> | <code>string</code> | The ID of the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.property.stackName">stackName</a></code> | <code>string</code> | The concrete CloudFormation physical stack name. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |

---

##### `node`<sup>Required</sup> <a name="node" id="@horustech/ai-document-processor-cdk.Stack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="@horustech/ai-document-processor-cdk.Stack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concrete account (e.g. `585695031111`) or the
   `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into an **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other account-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@horustech/ai-document-processor-cdk.Stack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@horustech/ai-document-processor-cdk.Stack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="@horustech/ai-document-processor-cdk.Stack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@horustech/ai-document-processor-cdk.Stack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@horustech/ai-document-processor-cdk.Stack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="@horustech/ai-document-processor-cdk.Stack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@horustech/ai-document-processor-cdk.Stack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@horustech/ai-document-processor-cdk.Stack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="@horustech/ai-document-processor-cdk.Stack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concrete region (e.g. `us-west-2`) or the `Aws.REGION`
   token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@horustech/ai-document-processor-cdk.Stack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The ID of the stack.

---

*Example*

```typescript
// After resolving, looks like
'arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123'
```


##### `stackName`<sup>Required</sup> <a name="stackName" id="@horustech/ai-document-processor-cdk.Stack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The concrete CloudFormation physical stack name.

This is either the name defined explicitly in the `stackName` prop or
allocated based on the stack's location in the construct tree. Stacks that
are directly defined under the app use their construct `id` as their stack
name. Stacks that are defined deeper within the tree will use a hashed naming
scheme based on the construct path to ensure uniqueness.

If you wish to obtain the deploy-time AWS::StackName intrinsic,
you can use `Aws.STACK_NAME` directly.

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="@horustech/ai-document-processor-cdk.Stack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@horustech/ai-document-processor-cdk.Stack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="@horustech/ai-document-processor-cdk.Stack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="@horustech/ai-document-processor-cdk.Stack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="@horustech/ai-document-processor-cdk.Stack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="@horustech/ai-document-processor-cdk.Stack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="@horustech/ai-document-processor-cdk.Stack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="@horustech/ai-document-processor-cdk.Stack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---


### Stage <a name="Stage" id="@horustech/ai-document-processor-cdk.Stage"></a>

An abstract application modeling unit consisting of Stacks that should be deployed together.

Derive a subclass of `Stage` and use it to model a single instance of your
application.

You can then instantiate your subclass multiple times to model multiple
copies of your application which should be be deployed to different
environments.

#### Initializers <a name="Initializers" id="@horustech/ai-document-processor-cdk.Stage.Initializer"></a>

```typescript
import { Stage } from '@horustech/ai-document-processor-cdk'

new Stage(scope: Construct, id: string, props?: StageProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.Stage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.Stage.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.Stage.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.StageProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@horustech/ai-document-processor-cdk.Stage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@horustech/ai-document-processor-cdk.Stage.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@horustech/ai-document-processor-cdk.Stage.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.StageProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.Stage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stage.synth">synth</a></code> | Synthesize this stage into a cloud assembly. |

---

##### `toString` <a name="toString" id="@horustech/ai-document-processor-cdk.Stage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `synth` <a name="synth" id="@horustech/ai-document-processor-cdk.Stage.synth"></a>

```typescript
public synth(options?: StageSynthesisOptions): CloudAssembly
```

Synthesize this stage into a cloud assembly.

Once an assembly has been synthesized, it cannot be modified. Subsequent
calls will return the same assembly.

###### `options`<sup>Optional</sup> <a name="options" id="@horustech/ai-document-processor-cdk.Stage.synth.parameter.options"></a>

- *Type:* aws-cdk-lib.StageSynthesisOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.Stage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stage.isStage">isStage</a></code> | Test whether the given construct is a stage. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stage.of">of</a></code> | Return the stage this construct is contained with, if available. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@horustech/ai-document-processor-cdk.Stage.isConstruct"></a>

```typescript
import { Stage } from '@horustech/ai-document-processor-cdk'

Stage.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.Stage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStage` <a name="isStage" id="@horustech/ai-document-processor-cdk.Stage.isStage"></a>

```typescript
import { Stage } from '@horustech/ai-document-processor-cdk'

Stage.isStage(x: any)
```

Test whether the given construct is a stage.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.Stage.isStage.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@horustech/ai-document-processor-cdk.Stage.of"></a>

```typescript
import { Stage } from '@horustech/ai-document-processor-cdk'

Stage.of(construct: IConstruct)
```

Return the stage this construct is contained with, if available.

If called
on a nested stage, returns its parent.

###### `construct`<sup>Required</sup> <a name="construct" id="@horustech/ai-document-processor-cdk.Stage.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.Stage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stage.property.artifactId">artifactId</a></code> | <code>string</code> | Artifact ID of the assembly if it is a nested stage. The root stage (app) will return an empty string. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stage.property.assetOutdir">assetOutdir</a></code> | <code>string</code> | The cloud assembly asset output directory. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stage.property.outdir">outdir</a></code> | <code>string</code> | The cloud assembly output directory. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stage.property.policyValidationBeta1">policyValidationBeta1</a></code> | <code>aws-cdk-lib.IPolicyValidationPluginBeta1[]</code> | Validation plugins to run during synthesis. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stage.property.stageName">stageName</a></code> | <code>string</code> | The name of the stage. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stage.property.account">account</a></code> | <code>string</code> | The default account for all resources defined within this stage. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stage.property.parentStage">parentStage</a></code> | <code>aws-cdk-lib.Stage</code> | The parent stage or `undefined` if this is the app. |
| <code><a href="#@horustech/ai-document-processor-cdk.Stage.property.region">region</a></code> | <code>string</code> | The default region for all resources defined within this stage. |

---

##### `node`<sup>Required</sup> <a name="node" id="@horustech/ai-document-processor-cdk.Stage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@horustech/ai-document-processor-cdk.Stage.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

Artifact ID of the assembly if it is a nested stage. The root stage (app) will return an empty string.

Derived from the construct path.

---

##### `assetOutdir`<sup>Required</sup> <a name="assetOutdir" id="@horustech/ai-document-processor-cdk.Stage.property.assetOutdir"></a>

```typescript
public readonly assetOutdir: string;
```

- *Type:* string

The cloud assembly asset output directory.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@horustech/ai-document-processor-cdk.Stage.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

The cloud assembly output directory.

---

##### `policyValidationBeta1`<sup>Required</sup> <a name="policyValidationBeta1" id="@horustech/ai-document-processor-cdk.Stage.property.policyValidationBeta1"></a>

```typescript
public readonly policyValidationBeta1: IPolicyValidationPluginBeta1[];
```

- *Type:* aws-cdk-lib.IPolicyValidationPluginBeta1[]
- *Default:* no validation plugins are used

Validation plugins to run during synthesis.

If any plugin reports any violation,
synthesis will be interrupted and the report displayed to the user.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@horustech/ai-document-processor-cdk.Stage.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The name of the stage.

Based on names of the parent stages separated by
hypens.

---

##### `account`<sup>Optional</sup> <a name="account" id="@horustech/ai-document-processor-cdk.Stage.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The default account for all resources defined within this stage.

---

##### `parentStage`<sup>Optional</sup> <a name="parentStage" id="@horustech/ai-document-processor-cdk.Stage.property.parentStage"></a>

```typescript
public readonly parentStage: Stage;
```

- *Type:* aws-cdk-lib.Stage

The parent stage or `undefined` if this is the app.

*

---

##### `region`<sup>Optional</sup> <a name="region" id="@horustech/ai-document-processor-cdk.Stage.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The default region for all resources defined within this stage.

---


### StepFunctionsStack <a name="StepFunctionsStack" id="@horustech/ai-document-processor-cdk.StepFunctionsStack"></a>

#### Initializers <a name="Initializers" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.Initializer"></a>

```typescript
import { StepFunctionsStack } from '@horustech/ai-document-processor-cdk'

new StepFunctionsStack(scope: Construct, id: string, props: StepFunctionsStackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.Initializer.parameter.props">props</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStackProps">StepFunctionsStackProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.Initializer.parameter.props"></a>

- *Type:* <a href="#@horustech/ai-document-processor-cdk.StepFunctionsStackProps">StepFunctionsStackProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.addMetadata">addMetadata</a></code> | Adds an arbitrary key-value pair, with information you want to record about the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.addStackTag">addStackTag</a></code> | Configure a stack tag. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.exportStringListValue">exportStringListValue</a></code> | Create a CloudFormation Export for a string list value. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a string value. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.removeStackTag">removeStackTag</a></code> | Remove a stack tag. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.toYamlString">toYamlString</a></code> | Convert an object, potentially containing tokens, to a YAML string. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.setParameter">setParameter</a></code> | Assign a value to one of the nested stack parameters. |

---

##### `toString` <a name="toString" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitrary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addStackTag` <a name="addStackTag" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.addStackTag"></a>

```typescript
public addStackTag(tagName: string, tagValue: string): void
```

Configure a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.addStackTag.parameter.tagName"></a>

- *Type:* string

---

###### `tagValue`<sup>Required</sup> <a name="tagValue" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.addStackTag.parameter.tagValue"></a>

- *Type:* string

---

##### `addTransform` <a name="addTransform" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportStringListValue` <a name="exportStringListValue" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.exportStringListValue"></a>

```typescript
public exportStringListValue(exportedValue: any, options?: ExportValueOptions): string[]
```

Create a CloudFormation Export for a string list value.

Returns a string list representing the corresponding `Fn.importValue()`
expression for this Export. The export expression is automatically wrapped with an
`Fn::Join` and the import value with an `Fn::Split`, since CloudFormation can only
export strings. You can control the name for the export by passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

See `exportValue` for an example of this process.

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.exportStringListValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.exportStringListValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `exportValue` <a name="exportValue" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a string value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

**Deployment 1: break the relationship**:

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

**Deployment 2: remove the bucket resource**:

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

  arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `removeStackTag` <a name="removeStackTag" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.removeStackTag"></a>

```typescript
public removeStackTag(tagName: string): void
```

Remove a stack tag.

At deploy time, CloudFormation will automatically apply all stack tags to all resources in the stack.

###### `tagName`<sup>Required</sup> <a name="tagName" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.removeStackTag.parameter.tagName"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `toYamlString` <a name="toYamlString" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.toYamlString"></a>

```typescript
public toYamlString(obj: any): string
```

Convert an object, potentially containing tokens, to a YAML string.

###### `obj`<sup>Required</sup> <a name="obj" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.toYamlString.parameter.obj"></a>

- *Type:* any

---

##### `setParameter` <a name="setParameter" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.setParameter"></a>

```typescript
public setParameter(name: string, value: string): void
```

Assign a value to one of the nested stack parameters.

###### `name`<sup>Required</sup> <a name="name" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.setParameter.parameter.name"></a>

- *Type:* string

The parameter name (ID).

---

###### `value`<sup>Required</sup> <a name="value" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.setParameter.parameter.value"></a>

- *Type:* string

The value to assign.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.isNestedStack">isNestedStack</a></code> | Checks if `x` is an object of type `NestedStack`. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.isConstruct"></a>

```typescript
import { StepFunctionsStack } from '@horustech/ai-document-processor-cdk'

StepFunctionsStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.isStack"></a>

```typescript
import { StepFunctionsStack } from '@horustech/ai-document-processor-cdk'

StepFunctionsStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.of"></a>

```typescript
import { StepFunctionsStack } from '@horustech/ai-document-processor-cdk'

StepFunctionsStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

##### `isNestedStack` <a name="isNestedStack" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.isNestedStack"></a>

```typescript
import { StepFunctionsStack } from '@horustech/ai-document-processor-cdk'

StepFunctionsStack.isNestedStack(x: any)
```

Checks if `x` is an object of type `NestedStack`.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.isNestedStack.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.stackId">stackId</a></code> | <code>string</code> | An attribute that represents the ID of the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.stackName">stackName</a></code> | <code>string</code> | An attribute that represents the name of the nested stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.dataTable">dataTable</a></code> | <code>aws-cdk-lib.aws_dynamodb.Table</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.inputBucket">inputBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.lambdaRole">lambdaRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.outputBucket">outputBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.sageMakerAsyncBucket">sageMakerAsyncBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.sageMakerEndpoint">sageMakerEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.SecurityGroup</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.stateMachine">stateMachine</a></code> | <code>aws-cdk-lib.aws_stepfunctions.StateMachine</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStack.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concrete account (e.g. `585695031111`) or the
   `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into an **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other account-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concrete region (e.g. `us-west-2`) or the `Aws.REGION`
   token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

An attribute that represents the ID of the stack.

This is a context aware attribute:
- If this is referenced from the parent stack, it will return `{ "Ref": "LogicalIdOfNestedStackResource" }`.
- If this is referenced from the context of the nested stack, it will return `{ "Ref": "AWS::StackId" }`

Example value: `arn:aws:cloudformation:us-east-2:123456789012:stack/mystack-mynestedstack-sggfrhxhum7w/f449b250-b969-11e0-a185-5081d0136786`

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

An attribute that represents the name of the nested stack.

This is a context aware attribute:
- If this is referenced from the parent stack, it will return a token that parses the name from the stack ID.
- If this is referenced from the context of the nested stack, it will return `{ "Ref": "AWS::StackName" }`

Example value: `mystack-mynestedstack-sggfrhxhum7w`

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `dataTable`<sup>Required</sup> <a name="dataTable" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.dataTable"></a>

```typescript
public readonly dataTable: Table;
```

- *Type:* aws-cdk-lib.aws_dynamodb.Table

---

##### `inputBucket`<sup>Required</sup> <a name="inputBucket" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.inputBucket"></a>

```typescript
public readonly inputBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.kmsKey"></a>

```typescript
public readonly kmsKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key

---

##### `lambdaRole`<sup>Required</sup> <a name="lambdaRole" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.lambdaRole"></a>

```typescript
public readonly lambdaRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---

##### `outputBucket`<sup>Required</sup> <a name="outputBucket" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.outputBucket"></a>

```typescript
public readonly outputBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `removalPolicy`<sup>Required</sup> <a name="removalPolicy" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `sageMakerAsyncBucket`<sup>Required</sup> <a name="sageMakerAsyncBucket" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.sageMakerAsyncBucket"></a>

```typescript
public readonly sageMakerAsyncBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `sageMakerEndpoint`<sup>Required</sup> <a name="sageMakerEndpoint" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.sageMakerEndpoint"></a>

```typescript
public readonly sageMakerEndpoint: string;
```

- *Type:* string

---

##### `securityGroup`<sup>Required</sup> <a name="securityGroup" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.securityGroup"></a>

```typescript
public readonly securityGroup: SecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.SecurityGroup

---

##### `stateMachine`<sup>Required</sup> <a name="stateMachine" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.stateMachine"></a>

```typescript
public readonly stateMachine: StateMachine;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.StateMachine

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@horustech/ai-document-processor-cdk.StepFunctionsStack.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---


## Structs <a name="Structs" id="Structs"></a>

### AiDocumentProcessorOutputs <a name="AiDocumentProcessorOutputs" id="@horustech/ai-document-processor-cdk.AiDocumentProcessorOutputs"></a>

Outputs from the AI Document Processor construct.

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.AiDocumentProcessorOutputs.Initializer"></a>

```typescript
import { AiDocumentProcessorOutputs } from '@horustech/ai-document-processor-cdk'

const aiDocumentProcessorOutputs: AiDocumentProcessorOutputs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessorOutputs.property.api">api</a></code> | <code>aws-cdk-lib.aws_apigateway.RestApi</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessorOutputs.property.inputBucket">inputBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessorOutputs.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessorOutputs.property.outputBucket">outputBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessorOutputs.property.sageMakerAsyncBucket">sageMakerAsyncBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessorOutputs.property.sageMakerEndpointName">sageMakerEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessorOutputs.property.userPool">userPool</a></code> | <code>aws-cdk-lib.aws_cognito.IUserPool</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessorOutputs.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `api`<sup>Required</sup> <a name="api" id="@horustech/ai-document-processor-cdk.AiDocumentProcessorOutputs.property.api"></a>

```typescript
public readonly api: RestApi;
```

- *Type:* aws-cdk-lib.aws_apigateway.RestApi

---

##### `inputBucket`<sup>Required</sup> <a name="inputBucket" id="@horustech/ai-document-processor-cdk.AiDocumentProcessorOutputs.property.inputBucket"></a>

```typescript
public readonly inputBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@horustech/ai-document-processor-cdk.AiDocumentProcessorOutputs.property.kmsKey"></a>

```typescript
public readonly kmsKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

##### `outputBucket`<sup>Required</sup> <a name="outputBucket" id="@horustech/ai-document-processor-cdk.AiDocumentProcessorOutputs.property.outputBucket"></a>

```typescript
public readonly outputBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `sageMakerAsyncBucket`<sup>Required</sup> <a name="sageMakerAsyncBucket" id="@horustech/ai-document-processor-cdk.AiDocumentProcessorOutputs.property.sageMakerAsyncBucket"></a>

```typescript
public readonly sageMakerAsyncBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `sageMakerEndpointName`<sup>Required</sup> <a name="sageMakerEndpointName" id="@horustech/ai-document-processor-cdk.AiDocumentProcessorOutputs.property.sageMakerEndpointName"></a>

```typescript
public readonly sageMakerEndpointName: string;
```

- *Type:* string

---

##### `userPool`<sup>Required</sup> <a name="userPool" id="@horustech/ai-document-processor-cdk.AiDocumentProcessorOutputs.property.userPool"></a>

```typescript
public readonly userPool: IUserPool;
```

- *Type:* aws-cdk-lib.aws_cognito.IUserPool

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@horustech/ai-document-processor-cdk.AiDocumentProcessorOutputs.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

### AiDocumentProcessorProps <a name="AiDocumentProcessorProps" id="@horustech/ai-document-processor-cdk.AiDocumentProcessorProps"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.AiDocumentProcessorProps.Initializer"></a>

```typescript
import { AiDocumentProcessorProps } from '@horustech/ai-document-processor-cdk'

const aiDocumentProcessorProps: AiDocumentProcessorProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessorProps.property.labels">labels</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.Labels">Labels</a></code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessorProps.property.apiConfig">apiConfig</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.ApiConfig">ApiConfig</a></code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessorProps.property.authConfig">authConfig</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.AuthConfig">AuthConfig</a></code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessorProps.property.bucketConfig">bucketConfig</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.BucketConfig">BucketConfig</a></code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessorProps.property.complianceFramework">complianceFramework</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessorProps.property.enableDetailedMonitoring">enableDetailedMonitoring</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessorProps.property.enableXRayTracing">enableXRayTracing</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessorProps.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.EncryptionConfig">EncryptionConfig</a></code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessorProps.property.sageMakerConfig">sageMakerConfig</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.SageMakerConfig">SageMakerConfig</a></code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.AiDocumentProcessorProps.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.VpcConfig">VpcConfig</a></code> | *No description.* |

---

##### `labels`<sup>Required</sup> <a name="labels" id="@horustech/ai-document-processor-cdk.AiDocumentProcessorProps.property.labels"></a>

```typescript
public readonly labels: Labels;
```

- *Type:* <a href="#@horustech/ai-document-processor-cdk.Labels">Labels</a>

---

##### `apiConfig`<sup>Optional</sup> <a name="apiConfig" id="@horustech/ai-document-processor-cdk.AiDocumentProcessorProps.property.apiConfig"></a>

```typescript
public readonly apiConfig: ApiConfig;
```

- *Type:* <a href="#@horustech/ai-document-processor-cdk.ApiConfig">ApiConfig</a>

---

##### `authConfig`<sup>Optional</sup> <a name="authConfig" id="@horustech/ai-document-processor-cdk.AiDocumentProcessorProps.property.authConfig"></a>

```typescript
public readonly authConfig: AuthConfig;
```

- *Type:* <a href="#@horustech/ai-document-processor-cdk.AuthConfig">AuthConfig</a>

---

##### `bucketConfig`<sup>Optional</sup> <a name="bucketConfig" id="@horustech/ai-document-processor-cdk.AiDocumentProcessorProps.property.bucketConfig"></a>

```typescript
public readonly bucketConfig: BucketConfig;
```

- *Type:* <a href="#@horustech/ai-document-processor-cdk.BucketConfig">BucketConfig</a>

---

##### `complianceFramework`<sup>Optional</sup> <a name="complianceFramework" id="@horustech/ai-document-processor-cdk.AiDocumentProcessorProps.property.complianceFramework"></a>

```typescript
public readonly complianceFramework: string;
```

- *Type:* string

---

##### `enableDetailedMonitoring`<sup>Optional</sup> <a name="enableDetailedMonitoring" id="@horustech/ai-document-processor-cdk.AiDocumentProcessorProps.property.enableDetailedMonitoring"></a>

```typescript
public readonly enableDetailedMonitoring: boolean;
```

- *Type:* boolean

---

##### `enableXRayTracing`<sup>Optional</sup> <a name="enableXRayTracing" id="@horustech/ai-document-processor-cdk.AiDocumentProcessorProps.property.enableXRayTracing"></a>

```typescript
public readonly enableXRayTracing: boolean;
```

- *Type:* boolean

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@horustech/ai-document-processor-cdk.AiDocumentProcessorProps.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: EncryptionConfig;
```

- *Type:* <a href="#@horustech/ai-document-processor-cdk.EncryptionConfig">EncryptionConfig</a>

---

##### `sageMakerConfig`<sup>Optional</sup> <a name="sageMakerConfig" id="@horustech/ai-document-processor-cdk.AiDocumentProcessorProps.property.sageMakerConfig"></a>

```typescript
public readonly sageMakerConfig: SageMakerConfig;
```

- *Type:* <a href="#@horustech/ai-document-processor-cdk.SageMakerConfig">SageMakerConfig</a>

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@horustech/ai-document-processor-cdk.AiDocumentProcessorProps.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: VpcConfig;
```

- *Type:* <a href="#@horustech/ai-document-processor-cdk.VpcConfig">VpcConfig</a>

---

### ApiConfig <a name="ApiConfig" id="@horustech/ai-document-processor-cdk.ApiConfig"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.ApiConfig.Initializer"></a>

```typescript
import { ApiConfig } from '@horustech/ai-document-processor-cdk'

const apiConfig: ApiConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiConfig.property.corsAllowedOrigins">corsAllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiConfig.property.throttling">throttling</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.Throttling">Throttling</a></code> | *No description.* |

---

##### `corsAllowedOrigins`<sup>Optional</sup> <a name="corsAllowedOrigins" id="@horustech/ai-document-processor-cdk.ApiConfig.property.corsAllowedOrigins"></a>

```typescript
public readonly corsAllowedOrigins: string[];
```

- *Type:* string[]

---

##### `throttling`<sup>Optional</sup> <a name="throttling" id="@horustech/ai-document-processor-cdk.ApiConfig.property.throttling"></a>

```typescript
public readonly throttling: Throttling;
```

- *Type:* <a href="#@horustech/ai-document-processor-cdk.Throttling">Throttling</a>

---

### ApiStackProps <a name="ApiStackProps" id="@horustech/ai-document-processor-cdk.ApiStackProps"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.ApiStackProps.Initializer"></a>

```typescript
import { ApiStackProps } from '@horustech/ai-document-processor-cdk'

const apiStackProps: ApiStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStackProps.property.dataTableName">dataTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStackProps.property.inputBucketName">inputBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStackProps.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStackProps.property.labels">labels</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.Labels">Labels</a></code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStackProps.property.outputBucketName">outputBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStackProps.property.restApi">restApi</a></code> | <code>aws-cdk-lib.aws_apigateway.RestApi</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStackProps.property.restApiName">restApiName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStackProps.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.SecurityGroup</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStackProps.property.tableArn">tableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStackProps.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStackProps.property.userPool">userPool</a></code> | <code>aws-cdk-lib.aws_cognito.UserPool</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStackProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ApiStackProps.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `dataTableName`<sup>Required</sup> <a name="dataTableName" id="@horustech/ai-document-processor-cdk.ApiStackProps.property.dataTableName"></a>

```typescript
public readonly dataTableName: string;
```

- *Type:* string

---

##### `inputBucketName`<sup>Required</sup> <a name="inputBucketName" id="@horustech/ai-document-processor-cdk.ApiStackProps.property.inputBucketName"></a>

```typescript
public readonly inputBucketName: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@horustech/ai-document-processor-cdk.ApiStackProps.property.kmsKey"></a>

```typescript
public readonly kmsKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key

---

##### `labels`<sup>Required</sup> <a name="labels" id="@horustech/ai-document-processor-cdk.ApiStackProps.property.labels"></a>

```typescript
public readonly labels: Labels;
```

- *Type:* <a href="#@horustech/ai-document-processor-cdk.Labels">Labels</a>

---

##### `outputBucketName`<sup>Required</sup> <a name="outputBucketName" id="@horustech/ai-document-processor-cdk.ApiStackProps.property.outputBucketName"></a>

```typescript
public readonly outputBucketName: string;
```

- *Type:* string

---

##### `restApi`<sup>Required</sup> <a name="restApi" id="@horustech/ai-document-processor-cdk.ApiStackProps.property.restApi"></a>

```typescript
public readonly restApi: RestApi;
```

- *Type:* aws-cdk-lib.aws_apigateway.RestApi

---

##### `restApiName`<sup>Required</sup> <a name="restApiName" id="@horustech/ai-document-processor-cdk.ApiStackProps.property.restApiName"></a>

```typescript
public readonly restApiName: string;
```

- *Type:* string

---

##### `securityGroup`<sup>Required</sup> <a name="securityGroup" id="@horustech/ai-document-processor-cdk.ApiStackProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: SecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.SecurityGroup

---

##### `tableArn`<sup>Required</sup> <a name="tableArn" id="@horustech/ai-document-processor-cdk.ApiStackProps.property.tableArn"></a>

```typescript
public readonly tableArn: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@horustech/ai-document-processor-cdk.ApiStackProps.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `userPool`<sup>Required</sup> <a name="userPool" id="@horustech/ai-document-processor-cdk.ApiStackProps.property.userPool"></a>

```typescript
public readonly userPool: UserPool;
```

- *Type:* aws-cdk-lib.aws_cognito.UserPool

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@horustech/ai-document-processor-cdk.ApiStackProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `description`<sup>Optional</sup> <a name="description" id="@horustech/ai-document-processor-cdk.ApiStackProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

### AuthConfig <a name="AuthConfig" id="@horustech/ai-document-processor-cdk.AuthConfig"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.AuthConfig.Initializer"></a>

```typescript
import { AuthConfig } from '@horustech/ai-document-processor-cdk'

const authConfig: AuthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.AuthConfig.property.passwordPolicy">passwordPolicy</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.PasswordPolicy">PasswordPolicy</a></code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.AuthConfig.property.userPool">userPool</a></code> | <code>aws-cdk-lib.aws_cognito.IUserPool</code> | *No description.* |

---

##### `passwordPolicy`<sup>Optional</sup> <a name="passwordPolicy" id="@horustech/ai-document-processor-cdk.AuthConfig.property.passwordPolicy"></a>

```typescript
public readonly passwordPolicy: PasswordPolicy;
```

- *Type:* <a href="#@horustech/ai-document-processor-cdk.PasswordPolicy">PasswordPolicy</a>

---

##### `userPool`<sup>Optional</sup> <a name="userPool" id="@horustech/ai-document-processor-cdk.AuthConfig.property.userPool"></a>

```typescript
public readonly userPool: IUserPool;
```

- *Type:* aws-cdk-lib.aws_cognito.IUserPool

---

### Authorizer <a name="Authorizer" id="@horustech/ai-document-processor-cdk.Authorizer"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.Authorizer.Initializer"></a>

```typescript
import { Authorizer } from '@horustech/ai-document-processor-cdk'

const authorizer: Authorizer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.Authorizer.property.claims">claims</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.Claims">Claims</a></code> | *No description.* |

---

##### `claims`<sup>Required</sup> <a name="claims" id="@horustech/ai-document-processor-cdk.Authorizer.property.claims"></a>

```typescript
public readonly claims: Claims;
```

- *Type:* <a href="#@horustech/ai-document-processor-cdk.Claims">Claims</a>

---

### BackupConfig <a name="BackupConfig" id="@horustech/ai-document-processor-cdk.BackupConfig"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.BackupConfig.Initializer"></a>

```typescript
import { BackupConfig } from '@horustech/ai-document-processor-cdk'

const backupConfig: BackupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.BackupConfig.property.enableBackups">enableBackups</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.BackupConfig.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.BackupConfig.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |

---

##### `enableBackups`<sup>Required</sup> <a name="enableBackups" id="@horustech/ai-document-processor-cdk.BackupConfig.property.enableBackups"></a>

```typescript
public readonly enableBackups: boolean;
```

- *Type:* boolean

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@horustech/ai-document-processor-cdk.BackupConfig.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@horustech/ai-document-processor-cdk.BackupConfig.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

### BaseStackProps <a name="BaseStackProps" id="@horustech/ai-document-processor-cdk.BaseStackProps"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.BaseStackProps.Initializer"></a>

```typescript
import { BaseStackProps } from '@horustech/ai-document-processor-cdk'

const baseStackProps: BaseStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.BaseStackProps.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.BaseStackProps.property.crossRegionReferences">crossRegionReferences</a></code> | <code>boolean</code> | Enable this flag to allow native cross region stack references. |
| <code><a href="#@horustech/ai-document-processor-cdk.BaseStackProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.BaseStackProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#@horustech/ai-document-processor-cdk.BaseStackProps.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | SNS Topic ARNs that will receive stack events. |
| <code><a href="#@horustech/ai-document-processor-cdk.BaseStackProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#@horustech/ai-document-processor-cdk.BaseStackProps.property.propertyInjectors">propertyInjectors</a></code> | <code>aws-cdk-lib.IPropertyInjector[]</code> | A list of IPropertyInjector attached to this Stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.BaseStackProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#@horustech/ai-document-processor-cdk.BaseStackProps.property.suppressTemplateIndentation">suppressTemplateIndentation</a></code> | <code>boolean</code> | Enable this flag to suppress indentation in generated CloudFormation templates. |
| <code><a href="#@horustech/ai-document-processor-cdk.BaseStackProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.BaseStackProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Tags that will be applied to the Stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.BaseStackProps.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.BaseStackProps.property.labels">labels</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.Labels">Labels</a></code> | *No description.* |

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="@horustech/ai-document-processor-cdk.BaseStackProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `crossRegionReferences`<sup>Optional</sup> <a name="crossRegionReferences" id="@horustech/ai-document-processor-cdk.BaseStackProps.property.crossRegionReferences"></a>

```typescript
public readonly crossRegionReferences: boolean;
```

- *Type:* boolean
- *Default:* false

Enable this flag to allow native cross region stack references.

Enabling this will create a CloudFormation custom resource
in both the producing stack and consuming stack in order to perform the export/import

This feature is currently experimental

---

##### `description`<sup>Optional</sup> <a name="description" id="@horustech/ai-document-processor-cdk.BaseStackProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="@horustech/ai-document-processor-cdk.BaseStackProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `notificationArns`<sup>Optional</sup> <a name="notificationArns" id="@horustech/ai-document-processor-cdk.BaseStackProps.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]
- *Default:* no notfication arns.

SNS Topic ARNs that will receive stack events.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@horustech/ai-document-processor-cdk.BaseStackProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `propertyInjectors`<sup>Optional</sup> <a name="propertyInjectors" id="@horustech/ai-document-processor-cdk.BaseStackProps.property.propertyInjectors"></a>

```typescript
public readonly propertyInjectors: IPropertyInjector[];
```

- *Type:* aws-cdk-lib.IPropertyInjector[]
- *Default:* no PropertyInjectors

A list of IPropertyInjector attached to this Stack.

---

##### `stackName`<sup>Optional</sup> <a name="stackName" id="@horustech/ai-document-processor-cdk.BaseStackProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `suppressTemplateIndentation`<sup>Optional</sup> <a name="suppressTemplateIndentation" id="@horustech/ai-document-processor-cdk.BaseStackProps.property.suppressTemplateIndentation"></a>

```typescript
public readonly suppressTemplateIndentation: boolean;
```

- *Type:* boolean
- *Default:* the value of `@aws-cdk/core:suppressTemplateIndentation`, or `false` if that is not set.

Enable this flag to suppress indentation in generated CloudFormation templates.

If not specified, the value of the `@aws-cdk/core:suppressTemplateIndentation`
context key will be used. If that is not specified, then the
default value `false` will be used.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="@horustech/ai-document-processor-cdk.BaseStackProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* The synthesizer specified on `App`, or `DefaultStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

The Stack Synthesizer controls aspects of synthesis and deployment,
like how assets are referenced and what IAM roles to use. For more
information, see the README of the main CDK package.

If not specified, the `defaultStackSynthesizer` from `App` will be used.
If that is not specified, `DefaultStackSynthesizer` is used if
`@aws-cdk/core:newStyleStackSynthesis` is set to `true` or the CDK major
version is v2. In CDK v1 `LegacyStackSynthesizer` is the default if no
other synthesizer is specified.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@horustech/ai-document-processor-cdk.BaseStackProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Tags that will be applied to the Stack.

These tags are applied to the CloudFormation Stack itself. They will not
appear in the CloudFormation template.

However, at deployment time, CloudFormation will apply these tags to all
resources in the stack that support tagging. You will not be able to exempt
resources from tagging (using the `excludeResourceTypes` property of
`Tags.of(...).add()`) for tags applied in this way.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@horustech/ai-document-processor-cdk.BaseStackProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

##### `labels`<sup>Required</sup> <a name="labels" id="@horustech/ai-document-processor-cdk.BaseStackProps.property.labels"></a>

```typescript
public readonly labels: Labels;
```

- *Type:* <a href="#@horustech/ai-document-processor-cdk.Labels">Labels</a>

---

### BucketConfig <a name="BucketConfig" id="@horustech/ai-document-processor-cdk.BucketConfig"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.BucketConfig.Initializer"></a>

```typescript
import { BucketConfig } from '@horustech/ai-document-processor-cdk'

const bucketConfig: BucketConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.BucketConfig.property.inputBucket">inputBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.BucketConfig.property.outputBucket">outputBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.BucketConfig.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.BucketConfig.property.sageMakerAsyncBucket">sageMakerAsyncBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |

---

##### `inputBucket`<sup>Optional</sup> <a name="inputBucket" id="@horustech/ai-document-processor-cdk.BucketConfig.property.inputBucket"></a>

```typescript
public readonly inputBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `outputBucket`<sup>Optional</sup> <a name="outputBucket" id="@horustech/ai-document-processor-cdk.BucketConfig.property.outputBucket"></a>

```typescript
public readonly outputBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@horustech/ai-document-processor-cdk.BucketConfig.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `sageMakerAsyncBucket`<sup>Optional</sup> <a name="sageMakerAsyncBucket" id="@horustech/ai-document-processor-cdk.BucketConfig.property.sageMakerAsyncBucket"></a>

```typescript
public readonly sageMakerAsyncBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

### Claims <a name="Claims" id="@horustech/ai-document-processor-cdk.Claims"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.Claims.Initializer"></a>

```typescript
import { Claims } from '@horustech/ai-document-processor-cdk'

const claims: Claims = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.Claims.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.Claims.property.sub">sub</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.Claims.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `email`<sup>Required</sup> <a name="email" id="@horustech/ai-document-processor-cdk.Claims.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `sub`<sup>Required</sup> <a name="sub" id="@horustech/ai-document-processor-cdk.Claims.property.sub"></a>

```typescript
public readonly sub: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@horustech/ai-document-processor-cdk.Claims.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

### CognitoAuthorizedEvent <a name="CognitoAuthorizedEvent" id="@horustech/ai-document-processor-cdk.CognitoAuthorizedEvent"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.CognitoAuthorizedEvent.Initializer"></a>

```typescript
import { CognitoAuthorizedEvent } from '@horustech/ai-document-processor-cdk'

const cognitoAuthorizedEvent: CognitoAuthorizedEvent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoAuthorizedEvent.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoAuthorizedEvent.property.requestContext">requestContext</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.RequestContext">RequestContext</a></code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoAuthorizedEvent.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoAuthorizedEvent.property.pathParameters">pathParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoAuthorizedEvent.property.queryStringParameters">queryStringParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `headers`<sup>Required</sup> <a name="headers" id="@horustech/ai-document-processor-cdk.CognitoAuthorizedEvent.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestContext`<sup>Required</sup> <a name="requestContext" id="@horustech/ai-document-processor-cdk.CognitoAuthorizedEvent.property.requestContext"></a>

```typescript
public readonly requestContext: RequestContext;
```

- *Type:* <a href="#@horustech/ai-document-processor-cdk.RequestContext">RequestContext</a>

---

##### `body`<sup>Optional</sup> <a name="body" id="@horustech/ai-document-processor-cdk.CognitoAuthorizedEvent.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `pathParameters`<sup>Optional</sup> <a name="pathParameters" id="@horustech/ai-document-processor-cdk.CognitoAuthorizedEvent.property.pathParameters"></a>

```typescript
public readonly pathParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `queryStringParameters`<sup>Optional</sup> <a name="queryStringParameters" id="@horustech/ai-document-processor-cdk.CognitoAuthorizedEvent.property.queryStringParameters"></a>

```typescript
public readonly queryStringParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

### CognitoStackProps <a name="CognitoStackProps" id="@horustech/ai-document-processor-cdk.CognitoStackProps"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.CognitoStackProps.Initializer"></a>

```typescript
import { CognitoStackProps } from '@horustech/ai-document-processor-cdk'

const cognitoStackProps: CognitoStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStackProps.property.inputBucket">inputBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStackProps.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStackProps.property.labels">labels</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.Labels">Labels</a></code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStackProps.property.outputBucket">outputBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.CognitoStackProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `inputBucket`<sup>Required</sup> <a name="inputBucket" id="@horustech/ai-document-processor-cdk.CognitoStackProps.property.inputBucket"></a>

```typescript
public readonly inputBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@horustech/ai-document-processor-cdk.CognitoStackProps.property.kmsKey"></a>

```typescript
public readonly kmsKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key

---

##### `labels`<sup>Required</sup> <a name="labels" id="@horustech/ai-document-processor-cdk.CognitoStackProps.property.labels"></a>

```typescript
public readonly labels: Labels;
```

- *Type:* <a href="#@horustech/ai-document-processor-cdk.Labels">Labels</a>

---

##### `outputBucket`<sup>Required</sup> <a name="outputBucket" id="@horustech/ai-document-processor-cdk.CognitoStackProps.property.outputBucket"></a>

```typescript
public readonly outputBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@horustech/ai-document-processor-cdk.CognitoStackProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

### ComplianceFrameworkProps <a name="ComplianceFrameworkProps" id="@horustech/ai-document-processor-cdk.ComplianceFrameworkProps"></a>

Configuration for compliance framework.

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.ComplianceFrameworkProps.Initializer"></a>

```typescript
import { ComplianceFrameworkProps } from '@horustech/ai-document-processor-cdk'

const complianceFrameworkProps: ComplianceFrameworkProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.ComplianceFrameworkProps.property.framework">framework</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ComplianceFrameworkProps.property.complianceTags">complianceTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ComplianceFrameworkProps.property.enableVerboseLogging">enableVerboseLogging</a></code> | <code>boolean</code> | *No description.* |

---

##### `framework`<sup>Required</sup> <a name="framework" id="@horustech/ai-document-processor-cdk.ComplianceFrameworkProps.property.framework"></a>

```typescript
public readonly framework: string;
```

- *Type:* string

---

##### `complianceTags`<sup>Optional</sup> <a name="complianceTags" id="@horustech/ai-document-processor-cdk.ComplianceFrameworkProps.property.complianceTags"></a>

```typescript
public readonly complianceTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `enableVerboseLogging`<sup>Optional</sup> <a name="enableVerboseLogging" id="@horustech/ai-document-processor-cdk.ComplianceFrameworkProps.property.enableVerboseLogging"></a>

```typescript
public readonly enableVerboseLogging: boolean;
```

- *Type:* boolean

---

### CostOptimizationConfig <a name="CostOptimizationConfig" id="@horustech/ai-document-processor-cdk.CostOptimizationConfig"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.CostOptimizationConfig.Initializer"></a>

```typescript
import { CostOptimizationConfig } from '@horustech/ai-document-processor-cdk'

const costOptimizationConfig: CostOptimizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.CostOptimizationConfig.property.enableAutoScaling">enableAutoScaling</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.CostOptimizationConfig.property.enableSpotInstances">enableSpotInstances</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.CostOptimizationConfig.property.s3LifecyclePolicies">s3LifecyclePolicies</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.S3LifecyclePolicies">S3LifecyclePolicies</a></code> | *No description.* |

---

##### `enableAutoScaling`<sup>Required</sup> <a name="enableAutoScaling" id="@horustech/ai-document-processor-cdk.CostOptimizationConfig.property.enableAutoScaling"></a>

```typescript
public readonly enableAutoScaling: boolean;
```

- *Type:* boolean

---

##### `enableSpotInstances`<sup>Required</sup> <a name="enableSpotInstances" id="@horustech/ai-document-processor-cdk.CostOptimizationConfig.property.enableSpotInstances"></a>

```typescript
public readonly enableSpotInstances: boolean;
```

- *Type:* boolean

---

##### `s3LifecyclePolicies`<sup>Optional</sup> <a name="s3LifecyclePolicies" id="@horustech/ai-document-processor-cdk.CostOptimizationConfig.property.s3LifecyclePolicies"></a>

```typescript
public readonly s3LifecyclePolicies: S3LifecyclePolicies;
```

- *Type:* <a href="#@horustech/ai-document-processor-cdk.S3LifecyclePolicies">S3LifecyclePolicies</a>

---

### DynamoDbStackProps <a name="DynamoDbStackProps" id="@horustech/ai-document-processor-cdk.DynamoDbStackProps"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.DynamoDbStackProps.Initializer"></a>

```typescript
import { DynamoDbStackProps } from '@horustech/ai-document-processor-cdk'

const dynamoDbStackProps: DynamoDbStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStackProps.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.DynamoDbStackProps.property.labels">labels</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.Labels">Labels</a></code> | *No description.* |

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@horustech/ai-document-processor-cdk.DynamoDbStackProps.property.kmsKey"></a>

```typescript
public readonly kmsKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key

---

##### `labels`<sup>Required</sup> <a name="labels" id="@horustech/ai-document-processor-cdk.DynamoDbStackProps.property.labels"></a>

```typescript
public readonly labels: Labels;
```

- *Type:* <a href="#@horustech/ai-document-processor-cdk.Labels">Labels</a>

---

### EncryptionConfig <a name="EncryptionConfig" id="@horustech/ai-document-processor-cdk.EncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.EncryptionConfig.Initializer"></a>

```typescript
import { EncryptionConfig } from '@horustech/ai-document-processor-cdk'

const encryptionConfig: EncryptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.EncryptionConfig.property.keyRotationPeriod">keyRotationPeriod</a></code> | <code>aws-cdk-lib.Duration</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.EncryptionConfig.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |

---

##### `keyRotationPeriod`<sup>Optional</sup> <a name="keyRotationPeriod" id="@horustech/ai-document-processor-cdk.EncryptionConfig.property.keyRotationPeriod"></a>

```typescript
public readonly keyRotationPeriod: Duration;
```

- *Type:* aws-cdk-lib.Duration

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@horustech/ai-document-processor-cdk.EncryptionConfig.property.kmsKey"></a>

```typescript
public readonly kmsKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

### Environment <a name="Environment" id="@horustech/ai-document-processor-cdk.Environment"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.Environment.Initializer"></a>

```typescript
import { Environment } from '@horustech/ai-document-processor-cdk'

const environment: Environment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.Environment.property.account">account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.Environment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.Environment.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `account`<sup>Required</sup> <a name="account" id="@horustech/ai-document-processor-cdk.Environment.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@horustech/ai-document-processor-cdk.Environment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@horustech/ai-document-processor-cdk.Environment.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

### KmsStackProps <a name="KmsStackProps" id="@horustech/ai-document-processor-cdk.KmsStackProps"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.KmsStackProps.Initializer"></a>

```typescript
import { KmsStackProps } from '@horustech/ai-document-processor-cdk'

const kmsStackProps: KmsStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.KmsStackProps.property.labels">labels</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.Labels">Labels</a></code> | *No description.* |

---

##### `labels`<sup>Required</sup> <a name="labels" id="@horustech/ai-document-processor-cdk.KmsStackProps.property.labels"></a>

```typescript
public readonly labels: Labels;
```

- *Type:* <a href="#@horustech/ai-document-processor-cdk.Labels">Labels</a>

---

### LambdaHandler <a name="LambdaHandler" id="@horustech/ai-document-processor-cdk.LambdaHandler"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.LambdaHandler.Initializer"></a>

```typescript
import { LambdaHandler } from '@horustech/ai-document-processor-cdk'

const lambdaHandler: LambdaHandler = { ... }
```


### LambdaHandlerEvent <a name="LambdaHandlerEvent" id="@horustech/ai-document-processor-cdk.LambdaHandlerEvent"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.LambdaHandlerEvent.Initializer"></a>

```typescript
import { LambdaHandlerEvent } from '@horustech/ai-document-processor-cdk'

const lambdaHandlerEvent: LambdaHandlerEvent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.LambdaHandlerEvent.property.requestContext">requestContext</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.RequestContext">RequestContext</a></code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.LambdaHandlerEvent.property.pathParameters">pathParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.LambdaHandlerEvent.property.queryStringParameters">queryStringParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.LambdaHandlerEvent.property.records">records</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `requestContext`<sup>Required</sup> <a name="requestContext" id="@horustech/ai-document-processor-cdk.LambdaHandlerEvent.property.requestContext"></a>

```typescript
public readonly requestContext: RequestContext;
```

- *Type:* <a href="#@horustech/ai-document-processor-cdk.RequestContext">RequestContext</a>

---

##### `pathParameters`<sup>Optional</sup> <a name="pathParameters" id="@horustech/ai-document-processor-cdk.LambdaHandlerEvent.property.pathParameters"></a>

```typescript
public readonly pathParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `queryStringParameters`<sup>Optional</sup> <a name="queryStringParameters" id="@horustech/ai-document-processor-cdk.LambdaHandlerEvent.property.queryStringParameters"></a>

```typescript
public readonly queryStringParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `records`<sup>Optional</sup> <a name="records" id="@horustech/ai-document-processor-cdk.LambdaHandlerEvent.property.records"></a>

```typescript
public readonly records: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

### LlamaNemotronStackProps <a name="LlamaNemotronStackProps" id="@horustech/ai-document-processor-cdk.LlamaNemotronStackProps"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.Initializer"></a>

```typescript
import { LlamaNemotronStackProps } from '@horustech/ai-document-processor-cdk'

const llamaNemotronStackProps: LlamaNemotronStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.crossRegionReferences">crossRegionReferences</a></code> | <code>boolean</code> | Enable this flag to allow native cross region stack references. |
| <code><a href="#@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | SNS Topic ARNs that will receive stack events. |
| <code><a href="#@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.propertyInjectors">propertyInjectors</a></code> | <code>aws-cdk-lib.IPropertyInjector[]</code> | A list of IPropertyInjector attached to this Stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.suppressTemplateIndentation">suppressTemplateIndentation</a></code> | <code>boolean</code> | Enable this flag to suppress indentation in generated CloudFormation templates. |
| <code><a href="#@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Tags that will be applied to the Stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.labels">labels</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.Labels">Labels</a></code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.modelName">modelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.sageMakerAsyncBucket">sageMakerAsyncBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.inferenceType">inferenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.initialInstanceCount">initialInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `crossRegionReferences`<sup>Optional</sup> <a name="crossRegionReferences" id="@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.crossRegionReferences"></a>

```typescript
public readonly crossRegionReferences: boolean;
```

- *Type:* boolean
- *Default:* false

Enable this flag to allow native cross region stack references.

Enabling this will create a CloudFormation custom resource
in both the producing stack and consuming stack in order to perform the export/import

This feature is currently experimental

---

##### `description`<sup>Optional</sup> <a name="description" id="@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `notificationArns`<sup>Optional</sup> <a name="notificationArns" id="@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]
- *Default:* no notfication arns.

SNS Topic ARNs that will receive stack events.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `propertyInjectors`<sup>Optional</sup> <a name="propertyInjectors" id="@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.propertyInjectors"></a>

```typescript
public readonly propertyInjectors: IPropertyInjector[];
```

- *Type:* aws-cdk-lib.IPropertyInjector[]
- *Default:* no PropertyInjectors

A list of IPropertyInjector attached to this Stack.

---

##### `stackName`<sup>Optional</sup> <a name="stackName" id="@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `suppressTemplateIndentation`<sup>Optional</sup> <a name="suppressTemplateIndentation" id="@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.suppressTemplateIndentation"></a>

```typescript
public readonly suppressTemplateIndentation: boolean;
```

- *Type:* boolean
- *Default:* the value of `@aws-cdk/core:suppressTemplateIndentation`, or `false` if that is not set.

Enable this flag to suppress indentation in generated CloudFormation templates.

If not specified, the value of the `@aws-cdk/core:suppressTemplateIndentation`
context key will be used. If that is not specified, then the
default value `false` will be used.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* The synthesizer specified on `App`, or `DefaultStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

The Stack Synthesizer controls aspects of synthesis and deployment,
like how assets are referenced and what IAM roles to use. For more
information, see the README of the main CDK package.

If not specified, the `defaultStackSynthesizer` from `App` will be used.
If that is not specified, `DefaultStackSynthesizer` is used if
`@aws-cdk/core:newStyleStackSynthesis` is set to `true` or the CDK major
version is v2. In CDK v1 `LegacyStackSynthesizer` is the default if no
other synthesizer is specified.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Tags that will be applied to the Stack.

These tags are applied to the CloudFormation Stack itself. They will not
appear in the CloudFormation template.

However, at deployment time, CloudFormation will apply these tags to all
resources in the stack that support tagging. You will not be able to exempt
resources from tagging (using the `excludeResourceTypes` property of
`Tags.of(...).add()`) for tags applied in this way.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.kmsKey"></a>

```typescript
public readonly kmsKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key

---

##### `labels`<sup>Required</sup> <a name="labels" id="@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.labels"></a>

```typescript
public readonly labels: Labels;
```

- *Type:* <a href="#@horustech/ai-document-processor-cdk.Labels">Labels</a>

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

---

##### `sageMakerAsyncBucket`<sup>Required</sup> <a name="sageMakerAsyncBucket" id="@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.sageMakerAsyncBucket"></a>

```typescript
public readonly sageMakerAsyncBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `inferenceType`<sup>Optional</sup> <a name="inferenceType" id="@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.inferenceType"></a>

```typescript
public readonly inferenceType: string;
```

- *Type:* string

---

##### `initialInstanceCount`<sup>Optional</sup> <a name="initialInstanceCount" id="@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.initialInstanceCount"></a>

```typescript
public readonly initialInstanceCount: number;
```

- *Type:* number

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@horustech/ai-document-processor-cdk.LlamaNemotronStackProps.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

### MonitoringConfig <a name="MonitoringConfig" id="@horustech/ai-document-processor-cdk.MonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.MonitoringConfig.Initializer"></a>

```typescript
import { MonitoringConfig } from '@horustech/ai-document-processor-cdk'

const monitoringConfig: MonitoringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.MonitoringConfig.property.enableDetailedMonitoring">enableDetailedMonitoring</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.MonitoringConfig.property.enableXRayTracing">enableXRayTracing</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.MonitoringConfig.property.logRetentionDays">logRetentionDays</a></code> | <code>number</code> | *No description.* |

---

##### `enableDetailedMonitoring`<sup>Required</sup> <a name="enableDetailedMonitoring" id="@horustech/ai-document-processor-cdk.MonitoringConfig.property.enableDetailedMonitoring"></a>

```typescript
public readonly enableDetailedMonitoring: boolean;
```

- *Type:* boolean

---

##### `enableXRayTracing`<sup>Required</sup> <a name="enableXRayTracing" id="@horustech/ai-document-processor-cdk.MonitoringConfig.property.enableXRayTracing"></a>

```typescript
public readonly enableXRayTracing: boolean;
```

- *Type:* boolean

---

##### `logRetentionDays`<sup>Optional</sup> <a name="logRetentionDays" id="@horustech/ai-document-processor-cdk.MonitoringConfig.property.logRetentionDays"></a>

```typescript
public readonly logRetentionDays: number;
```

- *Type:* number

---

### PasswordPolicy <a name="PasswordPolicy" id="@horustech/ai-document-processor-cdk.PasswordPolicy"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.PasswordPolicy.Initializer"></a>

```typescript
import { PasswordPolicy } from '@horustech/ai-document-processor-cdk'

const passwordPolicy: PasswordPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.PasswordPolicy.property.minLength">minLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.PasswordPolicy.property.requireDigits">requireDigits</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.PasswordPolicy.property.requireLowercase">requireLowercase</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.PasswordPolicy.property.requireSymbols">requireSymbols</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.PasswordPolicy.property.requireUppercase">requireUppercase</a></code> | <code>boolean</code> | *No description.* |

---

##### `minLength`<sup>Optional</sup> <a name="minLength" id="@horustech/ai-document-processor-cdk.PasswordPolicy.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

---

##### `requireDigits`<sup>Optional</sup> <a name="requireDigits" id="@horustech/ai-document-processor-cdk.PasswordPolicy.property.requireDigits"></a>

```typescript
public readonly requireDigits: boolean;
```

- *Type:* boolean

---

##### `requireLowercase`<sup>Optional</sup> <a name="requireLowercase" id="@horustech/ai-document-processor-cdk.PasswordPolicy.property.requireLowercase"></a>

```typescript
public readonly requireLowercase: boolean;
```

- *Type:* boolean

---

##### `requireSymbols`<sup>Optional</sup> <a name="requireSymbols" id="@horustech/ai-document-processor-cdk.PasswordPolicy.property.requireSymbols"></a>

```typescript
public readonly requireSymbols: boolean;
```

- *Type:* boolean

---

##### `requireUppercase`<sup>Optional</sup> <a name="requireUppercase" id="@horustech/ai-document-processor-cdk.PasswordPolicy.property.requireUppercase"></a>

```typescript
public readonly requireUppercase: boolean;
```

- *Type:* boolean

---

### RequestContext <a name="RequestContext" id="@horustech/ai-document-processor-cdk.RequestContext"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.RequestContext.Initializer"></a>

```typescript
import { RequestContext } from '@horustech/ai-document-processor-cdk'

const requestContext: RequestContext = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.RequestContext.property.authorizer">authorizer</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.Authorizer">Authorizer</a></code> | *No description.* |

---

##### `authorizer`<sup>Required</sup> <a name="authorizer" id="@horustech/ai-document-processor-cdk.RequestContext.property.authorizer"></a>

```typescript
public readonly authorizer: Authorizer;
```

- *Type:* <a href="#@horustech/ai-document-processor-cdk.Authorizer">Authorizer</a>

---

### S3LifecyclePolicies <a name="S3LifecyclePolicies" id="@horustech/ai-document-processor-cdk.S3LifecyclePolicies"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.S3LifecyclePolicies.Initializer"></a>

```typescript
import { S3LifecyclePolicies } from '@horustech/ai-document-processor-cdk'

const s3LifecyclePolicies: S3LifecyclePolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.S3LifecyclePolicies.property.expiration">expiration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.S3LifecyclePolicies.property.transitionToGlacier">transitionToGlacier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.S3LifecyclePolicies.property.transitionToIA">transitionToIA</a></code> | <code>number</code> | *No description.* |

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@horustech/ai-document-processor-cdk.S3LifecyclePolicies.property.expiration"></a>

```typescript
public readonly expiration: number;
```

- *Type:* number

---

##### `transitionToGlacier`<sup>Optional</sup> <a name="transitionToGlacier" id="@horustech/ai-document-processor-cdk.S3LifecyclePolicies.property.transitionToGlacier"></a>

```typescript
public readonly transitionToGlacier: number;
```

- *Type:* number

---

##### `transitionToIA`<sup>Optional</sup> <a name="transitionToIA" id="@horustech/ai-document-processor-cdk.S3LifecyclePolicies.property.transitionToIA"></a>

```typescript
public readonly transitionToIA: number;
```

- *Type:* number

---

### S3StackProps <a name="S3StackProps" id="@horustech/ai-document-processor-cdk.S3StackProps"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.S3StackProps.Initializer"></a>

```typescript
import { S3StackProps } from '@horustech/ai-document-processor-cdk'

const s3StackProps: S3StackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.S3StackProps.property.labels">labels</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.Labels">Labels</a></code> | *No description.* |

---

##### `labels`<sup>Required</sup> <a name="labels" id="@horustech/ai-document-processor-cdk.S3StackProps.property.labels"></a>

```typescript
public readonly labels: Labels;
```

- *Type:* <a href="#@horustech/ai-document-processor-cdk.Labels">Labels</a>

---

### SageMakerConfig <a name="SageMakerConfig" id="@horustech/ai-document-processor-cdk.SageMakerConfig"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.SageMakerConfig.Initializer"></a>

```typescript
import { SageMakerConfig } from '@horustech/ai-document-processor-cdk'

const sageMakerConfig: SageMakerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerConfig.property.inferenceType">inferenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerConfig.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.SageMakerConfig.property.modelName">modelName</a></code> | <code>string</code> | *No description.* |

---

##### `inferenceType`<sup>Optional</sup> <a name="inferenceType" id="@horustech/ai-document-processor-cdk.SageMakerConfig.property.inferenceType"></a>

```typescript
public readonly inferenceType: string;
```

- *Type:* string

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@horustech/ai-document-processor-cdk.SageMakerConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `modelName`<sup>Optional</sup> <a name="modelName" id="@horustech/ai-document-processor-cdk.SageMakerConfig.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

---

### SecretProps <a name="SecretProps" id="@horustech/ai-document-processor-cdk.SecretProps"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.SecretProps.Initializer"></a>

```typescript
import { SecretProps } from '@horustech/ai-document-processor-cdk'

const secretProps: SecretProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.SecretProps.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.SecretProps.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `environment`<sup>Required</sup> <a name="environment" id="@horustech/ai-document-processor-cdk.SecretProps.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@horustech/ai-document-processor-cdk.SecretProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

### SecurityConfig <a name="SecurityConfig" id="@horustech/ai-document-processor-cdk.SecurityConfig"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.SecurityConfig.Initializer"></a>

```typescript
import { SecurityConfig } from '@horustech/ai-document-processor-cdk'

const securityConfig: SecurityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.SecurityConfig.property.enableEncryptionAtRest">enableEncryptionAtRest</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.SecurityConfig.property.enableEncryptionInTransit">enableEncryptionInTransit</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.SecurityConfig.property.enableVpcEndpoints">enableVpcEndpoints</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.SecurityConfig.property.wafConfig">wafConfig</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.WafConfig">WafConfig</a></code> | *No description.* |

---

##### `enableEncryptionAtRest`<sup>Required</sup> <a name="enableEncryptionAtRest" id="@horustech/ai-document-processor-cdk.SecurityConfig.property.enableEncryptionAtRest"></a>

```typescript
public readonly enableEncryptionAtRest: boolean;
```

- *Type:* boolean

---

##### `enableEncryptionInTransit`<sup>Required</sup> <a name="enableEncryptionInTransit" id="@horustech/ai-document-processor-cdk.SecurityConfig.property.enableEncryptionInTransit"></a>

```typescript
public readonly enableEncryptionInTransit: boolean;
```

- *Type:* boolean

---

##### `enableVpcEndpoints`<sup>Required</sup> <a name="enableVpcEndpoints" id="@horustech/ai-document-processor-cdk.SecurityConfig.property.enableVpcEndpoints"></a>

```typescript
public readonly enableVpcEndpoints: boolean;
```

- *Type:* boolean

---

##### `wafConfig`<sup>Optional</sup> <a name="wafConfig" id="@horustech/ai-document-processor-cdk.SecurityConfig.property.wafConfig"></a>

```typescript
public readonly wafConfig: WafConfig;
```

- *Type:* <a href="#@horustech/ai-document-processor-cdk.WafConfig">WafConfig</a>

---

### StackInputs <a name="StackInputs" id="@horustech/ai-document-processor-cdk.StackInputs"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.StackInputs.Initializer"></a>

```typescript
import { StackInputs } from '@horustech/ai-document-processor-cdk'

const stackInputs: StackInputs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.StackInputs.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.StackInputs.property.crossRegionReferences">crossRegionReferences</a></code> | <code>boolean</code> | Enable this flag to allow native cross region stack references. |
| <code><a href="#@horustech/ai-document-processor-cdk.StackInputs.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.StackInputs.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#@horustech/ai-document-processor-cdk.StackInputs.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | SNS Topic ARNs that will receive stack events. |
| <code><a href="#@horustech/ai-document-processor-cdk.StackInputs.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#@horustech/ai-document-processor-cdk.StackInputs.property.propertyInjectors">propertyInjectors</a></code> | <code>aws-cdk-lib.IPropertyInjector[]</code> | A list of IPropertyInjector attached to this Stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.StackInputs.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#@horustech/ai-document-processor-cdk.StackInputs.property.suppressTemplateIndentation">suppressTemplateIndentation</a></code> | <code>boolean</code> | Enable this flag to suppress indentation in generated CloudFormation templates. |
| <code><a href="#@horustech/ai-document-processor-cdk.StackInputs.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.StackInputs.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Tags that will be applied to the Stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.StackInputs.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.StackInputs.property.labels">labels</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.Labels">Labels</a></code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.StackInputs.property.complianceFramework">complianceFramework</a></code> | <code>string</code> | *No description.* |

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="@horustech/ai-document-processor-cdk.StackInputs.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `crossRegionReferences`<sup>Optional</sup> <a name="crossRegionReferences" id="@horustech/ai-document-processor-cdk.StackInputs.property.crossRegionReferences"></a>

```typescript
public readonly crossRegionReferences: boolean;
```

- *Type:* boolean
- *Default:* false

Enable this flag to allow native cross region stack references.

Enabling this will create a CloudFormation custom resource
in both the producing stack and consuming stack in order to perform the export/import

This feature is currently experimental

---

##### `description`<sup>Optional</sup> <a name="description" id="@horustech/ai-document-processor-cdk.StackInputs.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="@horustech/ai-document-processor-cdk.StackInputs.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `notificationArns`<sup>Optional</sup> <a name="notificationArns" id="@horustech/ai-document-processor-cdk.StackInputs.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]
- *Default:* no notfication arns.

SNS Topic ARNs that will receive stack events.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@horustech/ai-document-processor-cdk.StackInputs.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `propertyInjectors`<sup>Optional</sup> <a name="propertyInjectors" id="@horustech/ai-document-processor-cdk.StackInputs.property.propertyInjectors"></a>

```typescript
public readonly propertyInjectors: IPropertyInjector[];
```

- *Type:* aws-cdk-lib.IPropertyInjector[]
- *Default:* no PropertyInjectors

A list of IPropertyInjector attached to this Stack.

---

##### `stackName`<sup>Optional</sup> <a name="stackName" id="@horustech/ai-document-processor-cdk.StackInputs.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `suppressTemplateIndentation`<sup>Optional</sup> <a name="suppressTemplateIndentation" id="@horustech/ai-document-processor-cdk.StackInputs.property.suppressTemplateIndentation"></a>

```typescript
public readonly suppressTemplateIndentation: boolean;
```

- *Type:* boolean
- *Default:* the value of `@aws-cdk/core:suppressTemplateIndentation`, or `false` if that is not set.

Enable this flag to suppress indentation in generated CloudFormation templates.

If not specified, the value of the `@aws-cdk/core:suppressTemplateIndentation`
context key will be used. If that is not specified, then the
default value `false` will be used.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="@horustech/ai-document-processor-cdk.StackInputs.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* The synthesizer specified on `App`, or `DefaultStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

The Stack Synthesizer controls aspects of synthesis and deployment,
like how assets are referenced and what IAM roles to use. For more
information, see the README of the main CDK package.

If not specified, the `defaultStackSynthesizer` from `App` will be used.
If that is not specified, `DefaultStackSynthesizer` is used if
`@aws-cdk/core:newStyleStackSynthesis` is set to `true` or the CDK major
version is v2. In CDK v1 `LegacyStackSynthesizer` is the default if no
other synthesizer is specified.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@horustech/ai-document-processor-cdk.StackInputs.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Tags that will be applied to the Stack.

These tags are applied to the CloudFormation Stack itself. They will not
appear in the CloudFormation template.

However, at deployment time, CloudFormation will apply these tags to all
resources in the stack that support tagging. You will not be able to exempt
resources from tagging (using the `excludeResourceTypes` property of
`Tags.of(...).add()`) for tags applied in this way.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@horustech/ai-document-processor-cdk.StackInputs.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

##### `labels`<sup>Required</sup> <a name="labels" id="@horustech/ai-document-processor-cdk.StackInputs.property.labels"></a>

```typescript
public readonly labels: Labels;
```

- *Type:* <a href="#@horustech/ai-document-processor-cdk.Labels">Labels</a>

---

##### `complianceFramework`<sup>Optional</sup> <a name="complianceFramework" id="@horustech/ai-document-processor-cdk.StackInputs.property.complianceFramework"></a>

```typescript
public readonly complianceFramework: string;
```

- *Type:* string

---

### StackProps <a name="StackProps" id="@horustech/ai-document-processor-cdk.StackProps"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.StackProps.Initializer"></a>

```typescript
import { StackProps } from '@horustech/ai-document-processor-cdk'

const stackProps: StackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.StackProps.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.StackProps.property.crossRegionReferences">crossRegionReferences</a></code> | <code>boolean</code> | Enable this flag to allow native cross region stack references. |
| <code><a href="#@horustech/ai-document-processor-cdk.StackProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.StackProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#@horustech/ai-document-processor-cdk.StackProps.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | SNS Topic ARNs that will receive stack events. |
| <code><a href="#@horustech/ai-document-processor-cdk.StackProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#@horustech/ai-document-processor-cdk.StackProps.property.propertyInjectors">propertyInjectors</a></code> | <code>aws-cdk-lib.IPropertyInjector[]</code> | A list of IPropertyInjector attached to this Stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.StackProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#@horustech/ai-document-processor-cdk.StackProps.property.suppressTemplateIndentation">suppressTemplateIndentation</a></code> | <code>boolean</code> | Enable this flag to suppress indentation in generated CloudFormation templates. |
| <code><a href="#@horustech/ai-document-processor-cdk.StackProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.StackProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Tags that will be applied to the Stack. |
| <code><a href="#@horustech/ai-document-processor-cdk.StackProps.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="@horustech/ai-document-processor-cdk.StackProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `crossRegionReferences`<sup>Optional</sup> <a name="crossRegionReferences" id="@horustech/ai-document-processor-cdk.StackProps.property.crossRegionReferences"></a>

```typescript
public readonly crossRegionReferences: boolean;
```

- *Type:* boolean
- *Default:* false

Enable this flag to allow native cross region stack references.

Enabling this will create a CloudFormation custom resource
in both the producing stack and consuming stack in order to perform the export/import

This feature is currently experimental

---

##### `description`<sup>Optional</sup> <a name="description" id="@horustech/ai-document-processor-cdk.StackProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="@horustech/ai-document-processor-cdk.StackProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `notificationArns`<sup>Optional</sup> <a name="notificationArns" id="@horustech/ai-document-processor-cdk.StackProps.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]
- *Default:* no notfication arns.

SNS Topic ARNs that will receive stack events.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@horustech/ai-document-processor-cdk.StackProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `propertyInjectors`<sup>Optional</sup> <a name="propertyInjectors" id="@horustech/ai-document-processor-cdk.StackProps.property.propertyInjectors"></a>

```typescript
public readonly propertyInjectors: IPropertyInjector[];
```

- *Type:* aws-cdk-lib.IPropertyInjector[]
- *Default:* no PropertyInjectors

A list of IPropertyInjector attached to this Stack.

---

##### `stackName`<sup>Optional</sup> <a name="stackName" id="@horustech/ai-document-processor-cdk.StackProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `suppressTemplateIndentation`<sup>Optional</sup> <a name="suppressTemplateIndentation" id="@horustech/ai-document-processor-cdk.StackProps.property.suppressTemplateIndentation"></a>

```typescript
public readonly suppressTemplateIndentation: boolean;
```

- *Type:* boolean
- *Default:* the value of `@aws-cdk/core:suppressTemplateIndentation`, or `false` if that is not set.

Enable this flag to suppress indentation in generated CloudFormation templates.

If not specified, the value of the `@aws-cdk/core:suppressTemplateIndentation`
context key will be used. If that is not specified, then the
default value `false` will be used.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="@horustech/ai-document-processor-cdk.StackProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* The synthesizer specified on `App`, or `DefaultStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

The Stack Synthesizer controls aspects of synthesis and deployment,
like how assets are referenced and what IAM roles to use. For more
information, see the README of the main CDK package.

If not specified, the `defaultStackSynthesizer` from `App` will be used.
If that is not specified, `DefaultStackSynthesizer` is used if
`@aws-cdk/core:newStyleStackSynthesis` is set to `true` or the CDK major
version is v2. In CDK v1 `LegacyStackSynthesizer` is the default if no
other synthesizer is specified.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@horustech/ai-document-processor-cdk.StackProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Tags that will be applied to the Stack.

These tags are applied to the CloudFormation Stack itself. They will not
appear in the CloudFormation template.

However, at deployment time, CloudFormation will apply these tags to all
resources in the stack that support tagging. You will not be able to exempt
resources from tagging (using the `excludeResourceTypes` property of
`Tags.of(...).add()`) for tags applied in this way.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@horustech/ai-document-processor-cdk.StackProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

### StepFunctionsStackProps <a name="StepFunctionsStackProps" id="@horustech/ai-document-processor-cdk.StepFunctionsStackProps"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.StepFunctionsStackProps.Initializer"></a>

```typescript
import { StepFunctionsStackProps } from '@horustech/ai-document-processor-cdk'

const stepFunctionsStackProps: StepFunctionsStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStackProps.property.dataTable">dataTable</a></code> | <code>aws-cdk-lib.aws_dynamodb.Table</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStackProps.property.inputBucket">inputBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStackProps.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStackProps.property.outputBucket">outputBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStackProps.property.sageMakerAsyncBucket">sageMakerAsyncBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStackProps.property.sageMakerEndpoint">sageMakerEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStackProps.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.SecurityGroup</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.StepFunctionsStackProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `dataTable`<sup>Required</sup> <a name="dataTable" id="@horustech/ai-document-processor-cdk.StepFunctionsStackProps.property.dataTable"></a>

```typescript
public readonly dataTable: Table;
```

- *Type:* aws-cdk-lib.aws_dynamodb.Table

---

##### `inputBucket`<sup>Required</sup> <a name="inputBucket" id="@horustech/ai-document-processor-cdk.StepFunctionsStackProps.property.inputBucket"></a>

```typescript
public readonly inputBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@horustech/ai-document-processor-cdk.StepFunctionsStackProps.property.kmsKey"></a>

```typescript
public readonly kmsKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key

---

##### `outputBucket`<sup>Required</sup> <a name="outputBucket" id="@horustech/ai-document-processor-cdk.StepFunctionsStackProps.property.outputBucket"></a>

```typescript
public readonly outputBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `sageMakerAsyncBucket`<sup>Required</sup> <a name="sageMakerAsyncBucket" id="@horustech/ai-document-processor-cdk.StepFunctionsStackProps.property.sageMakerAsyncBucket"></a>

```typescript
public readonly sageMakerAsyncBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `sageMakerEndpoint`<sup>Required</sup> <a name="sageMakerEndpoint" id="@horustech/ai-document-processor-cdk.StepFunctionsStackProps.property.sageMakerEndpoint"></a>

```typescript
public readonly sageMakerEndpoint: string;
```

- *Type:* string

---

##### `securityGroup`<sup>Required</sup> <a name="securityGroup" id="@horustech/ai-document-processor-cdk.StepFunctionsStackProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: SecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.SecurityGroup

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@horustech/ai-document-processor-cdk.StepFunctionsStackProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

### Throttling <a name="Throttling" id="@horustech/ai-document-processor-cdk.Throttling"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.Throttling.Initializer"></a>

```typescript
import { Throttling } from '@horustech/ai-document-processor-cdk'

const throttling: Throttling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.Throttling.property.burstLimit">burstLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.Throttling.property.rateLimit">rateLimit</a></code> | <code>number</code> | *No description.* |

---

##### `burstLimit`<sup>Optional</sup> <a name="burstLimit" id="@horustech/ai-document-processor-cdk.Throttling.property.burstLimit"></a>

```typescript
public readonly burstLimit: number;
```

- *Type:* number

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@horustech/ai-document-processor-cdk.Throttling.property.rateLimit"></a>

```typescript
public readonly rateLimit: number;
```

- *Type:* number

---

### VpcConfig <a name="VpcConfig" id="@horustech/ai-document-processor-cdk.VpcConfig"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.VpcConfig.Initializer"></a>

```typescript
import { VpcConfig } from '@horustech/ai-document-processor-cdk'

const vpcConfig: VpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.VpcConfig.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.VpcConfig.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@horustech/ai-document-processor-cdk.VpcConfig.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@horustech/ai-document-processor-cdk.VpcConfig.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

### WafConfig <a name="WafConfig" id="@horustech/ai-document-processor-cdk.WafConfig"></a>

#### Initializer <a name="Initializer" id="@horustech/ai-document-processor-cdk.WafConfig.Initializer"></a>

```typescript
import { WafConfig } from '@horustech/ai-document-processor-cdk'

const wafConfig: WafConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.WafConfig.property.enableWaf">enableWaf</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.WafConfig.property.rateLimitPerMinute">rateLimitPerMinute</a></code> | <code>number</code> | *No description.* |

---

##### `enableWaf`<sup>Required</sup> <a name="enableWaf" id="@horustech/ai-document-processor-cdk.WafConfig.property.enableWaf"></a>

```typescript
public readonly enableWaf: boolean;
```

- *Type:* boolean

---

##### `rateLimitPerMinute`<sup>Optional</sup> <a name="rateLimitPerMinute" id="@horustech/ai-document-processor-cdk.WafConfig.property.rateLimitPerMinute"></a>

```typescript
public readonly rateLimitPerMinute: number;
```

- *Type:* number

---

## Classes <a name="Classes" id="Classes"></a>

### ComplianceFramework <a name="ComplianceFramework" id="@horustech/ai-document-processor-cdk.ComplianceFramework"></a>

- *Implements:* aws-cdk-lib.IAspect

#### Initializers <a name="Initializers" id="@horustech/ai-document-processor-cdk.ComplianceFramework.Initializer"></a>

```typescript
import { ComplianceFramework } from '@horustech/ai-document-processor-cdk'

new ComplianceFramework(_scope: IConstruct, _id: string, props: ComplianceFrameworkProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.ComplianceFramework.Initializer.parameter._scope">_scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ComplianceFramework.Initializer.parameter._id">_id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.ComplianceFramework.Initializer.parameter.props">props</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.ComplianceFrameworkProps">ComplianceFrameworkProps</a></code> | *No description.* |

---

##### `_scope`<sup>Required</sup> <a name="_scope" id="@horustech/ai-document-processor-cdk.ComplianceFramework.Initializer.parameter._scope"></a>

- *Type:* constructs.IConstruct

---

##### `_id`<sup>Required</sup> <a name="_id" id="@horustech/ai-document-processor-cdk.ComplianceFramework.Initializer.parameter._id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@horustech/ai-document-processor-cdk.ComplianceFramework.Initializer.parameter.props"></a>

- *Type:* <a href="#@horustech/ai-document-processor-cdk.ComplianceFrameworkProps">ComplianceFrameworkProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.ComplianceFramework.visit">visit</a></code> | Apply compliance checks to the given construct. |

---

##### `visit` <a name="visit" id="@horustech/ai-document-processor-cdk.ComplianceFramework.visit"></a>

```typescript
public visit(node: IConstruct): void
```

Apply compliance checks to the given construct.

###### `node`<sup>Required</sup> <a name="node" id="@horustech/ai-document-processor-cdk.ComplianceFramework.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.ComplianceFramework.property.props">props</a></code> | <code><a href="#@horustech/ai-document-processor-cdk.ComplianceFrameworkProps">ComplianceFrameworkProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@horustech/ai-document-processor-cdk.ComplianceFramework.property.props"></a>

```typescript
public readonly props: ComplianceFrameworkProps;
```

- *Type:* <a href="#@horustech/ai-document-processor-cdk.ComplianceFrameworkProps">ComplianceFrameworkProps</a>

---


### Construct <a name="Construct" id="@horustech/ai-document-processor-cdk.Construct"></a>

- *Implements:* constructs.IConstruct

Represents the building block of the construct graph.

All constructs besides the root construct must be created within the scope of
another construct.

#### Initializers <a name="Initializers" id="@horustech/ai-document-processor-cdk.Construct.Initializer"></a>

```typescript
import { Construct } from '@horustech/ai-document-processor-cdk'

new Construct(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.Construct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@horustech/ai-document-processor-cdk.Construct.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@horustech/ai-document-processor-cdk.Construct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@horustech/ai-document-processor-cdk.Construct.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.Construct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@horustech/ai-document-processor-cdk.Construct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.Construct.isConstruct">isConstruct</a></code> | (deprecated) Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@horustech/ai-document-processor-cdk.Construct.isConstruct"></a>

```typescript
import { Construct } from '@horustech/ai-document-processor-cdk'

Construct.isConstruct(x: any)
```

(deprecated) Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@horustech/ai-document-processor-cdk.Construct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.Construct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@horustech/ai-document-processor-cdk.Construct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### Labels <a name="Labels" id="@horustech/ai-document-processor-cdk.Labels"></a>

#### Initializers <a name="Initializers" id="@horustech/ai-document-processor-cdk.Labels.Initializer"></a>

```typescript
import { Labels } from '@horustech/ai-document-processor-cdk'

new Labels(org: string, env: string, region: string, application: string, classification: string, del: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.Labels.Initializer.parameter.org">org</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.Labels.Initializer.parameter.env">env</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.Labels.Initializer.parameter.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.Labels.Initializer.parameter.application">application</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.Labels.Initializer.parameter.classification">classification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.Labels.Initializer.parameter.del">del</a></code> | <code>string</code> | *No description.* |

---

##### `org`<sup>Required</sup> <a name="org" id="@horustech/ai-document-processor-cdk.Labels.Initializer.parameter.org"></a>

- *Type:* string

---

##### `env`<sup>Required</sup> <a name="env" id="@horustech/ai-document-processor-cdk.Labels.Initializer.parameter.env"></a>

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@horustech/ai-document-processor-cdk.Labels.Initializer.parameter.region"></a>

- *Type:* string

---

##### `application`<sup>Required</sup> <a name="application" id="@horustech/ai-document-processor-cdk.Labels.Initializer.parameter.application"></a>

- *Type:* string

---

##### `classification`<sup>Required</sup> <a name="classification" id="@horustech/ai-document-processor-cdk.Labels.Initializer.parameter.classification"></a>

- *Type:* string

---

##### `del`<sup>Required</sup> <a name="del" id="@horustech/ai-document-processor-cdk.Labels.Initializer.parameter.del"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.Labels.applyTags">applyTags</a></code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.Labels.name">name</a></code> | *No description.* |

---

##### `applyTags` <a name="applyTags" id="@horustech/ai-document-processor-cdk.Labels.applyTags"></a>

```typescript
public applyTags(scope: Construct): void
```

###### `scope`<sup>Required</sup> <a name="scope" id="@horustech/ai-document-processor-cdk.Labels.applyTags.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name` <a name="name" id="@horustech/ai-document-processor-cdk.Labels.name"></a>

```typescript
public name(): string
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.Labels.property.application">application</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.Labels.property.classification">classification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.Labels.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.Labels.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.Labels.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@horustech/ai-document-processor-cdk.Labels.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `application`<sup>Required</sup> <a name="application" id="@horustech/ai-document-processor-cdk.Labels.property.application"></a>

```typescript
public readonly application: string;
```

- *Type:* string

---

##### `classification`<sup>Required</sup> <a name="classification" id="@horustech/ai-document-processor-cdk.Labels.property.classification"></a>

```typescript
public readonly classification: string;
```

- *Type:* string

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@horustech/ai-document-processor-cdk.Labels.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@horustech/ai-document-processor-cdk.Labels.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@horustech/ai-document-processor-cdk.Labels.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@horustech/ai-document-processor-cdk.Labels.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---



## Enums <a name="Enums" id="Enums"></a>

### ComplianceFrameworkType <a name="ComplianceFrameworkType" id="@horustech/ai-document-processor-cdk.ComplianceFrameworkType"></a>

Supported compliance frameworks.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@horustech/ai-document-processor-cdk.ComplianceFrameworkType.HIPAA">HIPAA</a></code> | Health Insurance Portability and Accountability Act. |
| <code><a href="#@horustech/ai-document-processor-cdk.ComplianceFrameworkType.NIST">NIST</a></code> | NIST 800-53 Revision 5. |
| <code><a href="#@horustech/ai-document-processor-cdk.ComplianceFrameworkType.PCI">PCI</a></code> | Payment Card Industry Data Security Standard 3.2.1. |
| <code><a href="#@horustech/ai-document-processor-cdk.ComplianceFrameworkType.ALL">ALL</a></code> | All supported frameworks. |
| <code><a href="#@horustech/ai-document-processor-cdk.ComplianceFrameworkType.AWS_SOLUTIONS_ONLY">AWS_SOLUTIONS_ONLY</a></code> | Only AWS Solutions checks. |

---

##### `HIPAA` <a name="HIPAA" id="@horustech/ai-document-processor-cdk.ComplianceFrameworkType.HIPAA"></a>

Health Insurance Portability and Accountability Act.

---


##### `NIST` <a name="NIST" id="@horustech/ai-document-processor-cdk.ComplianceFrameworkType.NIST"></a>

NIST 800-53 Revision 5.

---


##### `PCI` <a name="PCI" id="@horustech/ai-document-processor-cdk.ComplianceFrameworkType.PCI"></a>

Payment Card Industry Data Security Standard 3.2.1.

---


##### `ALL` <a name="ALL" id="@horustech/ai-document-processor-cdk.ComplianceFrameworkType.ALL"></a>

All supported frameworks.

---


##### `AWS_SOLUTIONS_ONLY` <a name="AWS_SOLUTIONS_ONLY" id="@horustech/ai-document-processor-cdk.ComplianceFrameworkType.AWS_SOLUTIONS_ONLY"></a>

Only AWS Solutions checks.

---

